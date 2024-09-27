import type { HttpInterceptorFn } from '@angular/common/http';

import { AuthInterceptor } from './auth.interceptor';
import { ExtraHeadersInterceptor } from './extra-headers.interceptor';
import { HttpErrorInterceptor } from './http-error.interceptor';

export const httpInterceptors: HttpInterceptorFn[] = [
  AuthInterceptor,
  ExtraHeadersInterceptor,
  HttpErrorInterceptor,
];
