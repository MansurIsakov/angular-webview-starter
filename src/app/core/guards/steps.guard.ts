import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

import { NavigationService } from '@core/services';

export const StepsGuard: CanMatchFn = () => {
  const router = inject(Router);
  const navigationService = inject(NavigationService);

  const params = router?.getCurrentNavigation()?.initialUrl.queryParams;

  if (params?.['back']) {
    navigationService.setBackButtonLink(params['back']);
  }

  if (params?.['step']) {
    navigationService.setDirectExit(true);
    const { step, ...queryParams } = params;
    return router.navigate([`/${step}`], { queryParams, replaceUrl: true });
  }

  return true;
};
