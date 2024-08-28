import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

import { StorageEnum } from '@core/enums';
import { StorageService } from '@core/services';

export const AuthGuard: CanMatchFn = () => {
  const router = inject(Router);
  const storage = inject(StorageService);

  const routerQueryParams =
    router?.getCurrentNavigation()?.initialUrl.queryParams;
  const queryParams = !!(
    routerQueryParams &&
    routerQueryParams[StorageEnum.CHECKSUM] &&
    routerQueryParams[StorageEnum.USER_ID]
  );

  const userId = storage.getSessionStorage(StorageEnum.USER_ID);
  const checksum = storage.getSessionStorage(StorageEnum.CHECKSUM);
  const params = !!(userId && checksum);

  return queryParams || params;
};
