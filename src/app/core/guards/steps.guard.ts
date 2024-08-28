import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

import { AppNavigationService } from '@core/services';

export const StepsGuard: CanMatchFn = () => {
  const router = inject(Router);
  const appNavigationService = inject(AppNavigationService);

  const params = router?.getCurrentNavigation()?.initialUrl.queryParams;

  if (params?.['step']) {
    appNavigationService.directExit = true;
    const { step, ...queryParams } = params;
    return router.navigate([`/${step}`], { queryParams, replaceUrl: true });
  }

  return true;
};
