import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';

import { HotToastService } from '@ngxpert/hot-toast';
import { EMPTY, catchError, retry, tap, throwError } from 'rxjs';

export const HttpErrorInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const toater = inject(HotToastService);

  return next(request).pipe(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tap((res: HttpEvent<any>) => {
      retry(1);
      if (res instanceof HttpResponse) {
        const error = res.body?.error;
        if (error) {
          toater.error(error?.message);
          throwError(() => error?.message);
        }
      }
    }),
    catchError((error: HttpErrorResponse) => {
      toater.error(error?.error?.message);
      return EMPTY;
    })
  );
};
