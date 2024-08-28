import { KeyValuePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { TranslocoPipe } from '@jsverse/transloco';

import { ErrorMessagePipe } from './error-message.pipe';

@Component({
  selector: 'app-input-error',
  standalone: true,
  imports: [KeyValuePipe, ErrorMessagePipe, TranslocoPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (errors) {
      @for (error of errors | keyvalue; track error.key) {
        <div
          class="mt-2 animate-input-message text-sm font-medium text-error-200">
          {{ error.key | errorMessage: error.value }}
        </div>
      }
    }
  `,
})
export class InputErrorComponent {
  @Input() errors: ValidationErrors | null = null;
}
