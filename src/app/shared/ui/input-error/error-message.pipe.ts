import { Pipe, PipeTransform, inject } from '@angular/core';

import { VALIDATION_ERROR_MESSAGES } from './validation-error-messages.token';

@Pipe({
  name: 'errorMessage',
  standalone: true,
})
export class ErrorMessagePipe implements PipeTransform {
  private errorMessages = inject(VALIDATION_ERROR_MESSAGES);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(key: string, errValue: any): string {
    if (!this.errorMessages[key]) {
      console.warn(`No error message found for ${key}`);
      return '';
    }

    return this.errorMessages[key](errValue);
  }
}
