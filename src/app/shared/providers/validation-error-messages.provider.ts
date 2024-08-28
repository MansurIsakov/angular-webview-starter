import { Provider } from '@angular/core';

import { TranslocoService } from '@jsverse/transloco';

import {
  VALIDATION_ERROR_MESSAGES,
  errorMessagesFactory,
} from '@shared/ui/input-error/validation-error-messages.token';

export const provideValidationErrorMessages = (): Provider => ({
  provide: VALIDATION_ERROR_MESSAGES,
  useFactory: errorMessagesFactory,
  deps: [TranslocoService],
});
