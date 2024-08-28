import {
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
  inject,
} from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  NgControl,
  NgForm,
} from '@angular/forms';

import {
  EMPTY,
  Subscription,
  fromEvent,
  iif,
  merge,
  skip,
  startWith,
} from 'rxjs';

import { ErrorStateMatcherService } from '@shared/ui/input-error/error-state-matcher.service';
import { InputErrorComponent } from '@shared/ui/input-error/input-error.component';

type FormType = NgForm | FormGroupDirective | null;

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: `
  [ngModel]:not([withoutValidationErrors]),
  [formControl]:not([withoutValidationErrors]),
  [formControlName]:not([withoutValidationErrors]),
  [formGroupName]:not([withoutValidationErrors])
  `,
  standalone: true,
})
export class DynamicValidatorMessageDirective implements OnInit, OnDestroy {
  ngControl =
    inject(NgControl, { self: true, optional: true }) ||
    inject(ControlContainer, { self: true });
  elementRef = inject(ElementRef);
  get form(): FormType {
    return this.parentContainer?.formDirective as FormType;
  }

  @Input() errorStateMatcher = inject(ErrorStateMatcherService);
  @Input() container = inject(ViewContainerRef);

  private componentRef: ComponentRef<InputErrorComponent> | null = null;
  private errorMessageTrigger!: Subscription;
  private parentContainer = inject(ControlContainer, { optional: true });

  ngOnInit(): void {
    if (!this.ngControl.control) throw new Error('NgControl is required');

    this.errorMessageTrigger = merge(
      this.ngControl.control.statusChanges,
      fromEvent(this.elementRef.nativeElement, 'blur'),
      // eslint-disable-next-line
      iif(() => !!this.form, this.form!.ngSubmit, EMPTY)
    )
      .pipe(
        startWith(this.ngControl.control.status),
        skip(this.ngControl instanceof NgControl ? 1 : 0) // skip template-driven forms
      )
      .subscribe(() => {
        if (
          this.errorStateMatcher.isErrorVisible(
            this.ngControl.control,
            this.form
          )
        ) {
          if (!this.componentRef) {
            this.componentRef =
              this.container.createComponent(InputErrorComponent);
            this.componentRef.changeDetectorRef.markForCheck();
          }

          this.componentRef.setInput('errors', this.ngControl.errors);
        } else {
          this.componentRef?.destroy();
          this.componentRef = null;
        }
      });
  }

  ngOnDestroy(): void {
    this.errorMessageTrigger.unsubscribe();
    this.componentRef?.destroy();
  }
}
