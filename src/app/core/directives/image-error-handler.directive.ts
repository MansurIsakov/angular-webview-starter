import { Directive, HostListener, Renderer2, inject } from '@angular/core';

import { ThemeEnum } from '@core/enums';
import { ThemeService } from '@core/services';

@Directive({
  selector: '[appImageErrorHandler]',
  standalone: true,
})
export class ImageErrorHandlerDirective {
  private _themeService = inject(ThemeService);

  private attempt = 0;
  private fallbackImage =
    this._themeService.theme === ThemeEnum.Light
      ? 'assets/images/no-image.png'
      : 'assets/images/no-image-dark.png';

  constructor(private renderer: Renderer2) {}

  @HostListener('error', ['$event'])
  onError(event: Event): void {
    const image = event.target as HTMLImageElement;

    if (this.attempt === 0) {
      this.switchToPng(image);
    } else if (this.attempt === 1) {
      this.loadFallbackImage(image);
    }
  }

  private switchToPng(image: HTMLImageElement): void {
    this.attempt++;

    const pngSrc = image.src.replace('.webp', '.png');
    this.renderer.setAttribute(image, 'src', pngSrc);
  }

  private loadFallbackImage(image: HTMLImageElement): void {
    this.attempt++;
    this.renderer.setAttribute(image, 'src', this.fallbackImage);
  }
}
