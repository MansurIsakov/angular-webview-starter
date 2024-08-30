import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { DIRECT_STEPS } from '@core/constants';
import { PlatformEnum, StorageEnum } from '@core/enums';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AppNavigationService {
  private _router = inject(Router);
  private storageService = inject(StorageService);

  private readonly _exitToAppUrl = 'https://exit.to.app';
  public directExit = false;

  handleBackAction(): void {
    const { url } = this._router;
    const mainPage = url.split('?')[0] === '/';
    const params = window.location.search;

    if (
      mainPage ||
      (this.directExit && DIRECT_STEPS.includes(location.pathname))
    ) {
      this.exitToApp();
      return;
    }

    if (params) {
      this._router.navigate(['/']);
    }

    window.history.back();
  }

  exitToApp(): void {
    window.location.href = this._exitToAppUrl;
  }

  openOutsideWebview(url: string): void {
    const platform = this.storageService.getSessionStorage(
      StorageEnum.PLATFORM
    );
    let formattedUrl = `${url}?target=_blank`;
    if (platform === PlatformEnum.IOS) {
      formattedUrl = formattedUrl.replace('https://', 'externals://');
    }
    window.location.href = formattedUrl;
  }
}
