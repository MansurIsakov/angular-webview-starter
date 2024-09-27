import { Platform } from '@angular/cdk/platform';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { DIRECT_STEPS, EXIT_TO_APP } from '@core/constants';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly _router = inject(Router);
  private readonly platform = inject(Platform);

  private directExit = false;
  private backButtonLink: string | null = null;

  setDirectExit(value: boolean): void {
    this.directExit = value;
  }

  setBackButtonLink(link: string | null): void {
    this.backButtonLink = link;
  }

  handleBackAction(): void {
    const currentPath = this._router.url.split('?')[0];
    const isMainPath = currentPath === '/';
    const params = new URLSearchParams(window.location.search);

    if (this.backButtonLink) {
      this._router.navigate([this.backButtonLink]);
      this.backButtonLink = null;
      return;
    }

    if (isMainPath || this.isDirectStep(currentPath)) {
      this.exitToApp();
      return;
    }

    if (params.toString()) {
      this._router.navigate(['/']);
      return;
    }

    window.history.back();
  }

  exitToApp(): void {
    this.clearHistory();
    window.location.href = EXIT_TO_APP;
  }

  openOutsideWebview(url: string): void {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('target', '_blank');
      let formattedUrl = urlObj.toString();

      if (this.platform.IOS) {
        formattedUrl = formattedUrl.replace(/^https?:\/\//, 'externals://');
      }

      window.location.href = formattedUrl;
    } catch (error) {
      console.error('Error opening external webview', error);
    }
  }

  private clearHistory(): void {
    while (window.history.length > 1) {
      window.history.back();
    }
  }

  private isDirectStep(currentPath: string): boolean {
    return this.directExit && DIRECT_STEPS.includes(currentPath);
  }
}
