import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslocoService } from '@jsverse/transloco';

import { LagnuageEnum, StorageEnum, ThemeEnum } from '@core/enums';
import { StorageService, ThemeService } from '@core/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private _storageService = inject(StorageService);
  private _transloco = inject(TranslocoService);
  private _themeService = inject(ThemeService);

  ngOnInit(): void {
    window.location.search && this._setQueryParams();
  }

  private _setQueryParams(): void {
    const params = new URLSearchParams(window.location.search);

    this._storageService.setQueryParams(params);
    this._themeService.theme = params.get(StorageEnum.THEME) as ThemeEnum;
    this._setLanguage(params.get(StorageEnum.LANGUAGE) ?? LagnuageEnum.RU);
  }

  private _setLanguage(queryLanguage?: string): void {
    const language: string =
      queryLanguage ||
      this._storageService.getSessionStorage(StorageEnum.LANGUAGE) ||
      LagnuageEnum.RU;

    this._transloco.setActiveLang(language);
  }
}
