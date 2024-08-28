import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';

import { LagnuageEnum, StorageEnum, ThemeEnum } from '@core/enums';
import { StorageService } from '@core/services';

export const ExtraHeadersInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const _storageService = inject(StorageService);

  let { headers } = request;

  const language = _storageService.getSessionStorage(StorageEnum.LANGUAGE);
  const theme = _storageService.getSessionStorage(
    StorageEnum.THEME
  ) as ThemeEnum | null;
  const platform = _storageService.getSessionStorage(StorageEnum.PLATFORM);
  const version = _storageService.getSessionStorage(StorageEnum.VERSION);

  if (language) {
    headers = headers.set('x-accept-language', language || LagnuageEnum.RU);
  }

  if (theme) {
    headers = headers.set('x-platform-theme', theme);
  }

  if (platform) {
    headers = headers.set('x-platform-os', platform);
  }

  if (version) {
    headers = headers.set('x-platform-version', version);
  }

  return next(request.clone({ headers }));
};
