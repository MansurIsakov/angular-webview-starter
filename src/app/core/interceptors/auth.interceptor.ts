import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';

import { catchError, of, tap } from 'rxjs';

import { RequestHeadersEnum, StorageEnum } from '@core/enums';
import { StorageService } from '@core/services';

export const AuthInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const storage = inject(StorageService);

  let { headers } = request;

  const currentToken = storage.getSessionStorage(StorageEnum.TOKEN);
  const user_id = storage.getSessionStorage(StorageEnum.USER_ID);
  const checksum = storage.getSessionStorage(StorageEnum.CHECKSUM);

  if (!headers.has('Content-Type')) {
    headers = headers.set('Content-Type', 'application/json');
  }

  if (currentToken) {
    headers = headers.set(RequestHeadersEnum.TOKEN, currentToken);
  } else if (user_id && checksum) {
    headers = headers.set(
      RequestHeadersEnum.AUTH_HEADER,
      `${user_id}; ${checksum}`
    );
  }

  return next(request.clone({ headers })).pipe(
    tap(resp => {
      if (resp instanceof HttpResponse) {
        const token = resp.headers.get(RequestHeadersEnum.TOKEN);

        if (token) {
          storage.setSessionStorage(StorageEnum.TOKEN, token);
        }
      }
    }),
    catchError((error: HttpEvent<unknown>) => {
      console.error('Interceptor error:', error);
      return of(error);
    })
  );
};
