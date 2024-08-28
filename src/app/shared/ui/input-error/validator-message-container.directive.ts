import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[validatorMessageContainer]',
  standalone: true,
  exportAs: 'validatorMessageContainer',
})
export class ValidatorMessageContainerDirective {
  container = inject(ViewContainerRef);
}
