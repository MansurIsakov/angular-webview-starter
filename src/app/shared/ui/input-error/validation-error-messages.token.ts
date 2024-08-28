import { InjectionToken } from '@angular/core';

import { TranslocoService } from '@jsverse/transloco';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ErrorMessageFunction = (args?: any) => string;
type ErrorMessages = { [key: string]: ErrorMessageFunction };

export const errorMessagesFactory = (
  translocoService: TranslocoService
): ErrorMessages => {
  return {
    required: () => translocoService.translate('input-errors.required'),
    minlength: ({ requiredLength }) =>
      translocoService.translate('input-errors.minLength', { requiredLength }),
  };
};

export const VALIDATION_ERROR_MESSAGES = new InjectionToken<ErrorMessages>(
  'Validation Messages'
);
