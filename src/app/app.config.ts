import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { provideTransloco } from '@jsverse/transloco';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
import {
  provideNgxWebstorage,
  withLocalStorage,
  withNgxWebstorageConfig,
  withSessionStorage,
} from 'ngx-webstorage';

import {
  AuthInterceptor,
  ExtraHeadersInterceptor,
  HttpErrorInterceptor,
} from '@core/interceptors';
import { TranslocoHttpLoader } from '@core/services';
import { provideValidationErrorMessages } from '@shared/providers';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        AuthInterceptor,
        ExtraHeadersInterceptor,
        HttpErrorInterceptor,
      ])
    ),
    provideTransloco({
      config: {
        availableLangs: ['en', 'ru', 'uz'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    provideNgxWebstorage(
      withNgxWebstorageConfig({ separator: ':', caseSensitive: true }),
      withLocalStorage(),
      withSessionStorage()
    ),
    provideHotToastConfig(),
    provideValidationErrorMessages(),
  ],
};
