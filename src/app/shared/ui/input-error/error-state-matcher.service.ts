import { Injectable } from '@angular/core';
import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';

export interface ErrorStateMatcher {
  isErrorVisible(
    control: AbstractControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorStateMatcherService implements ErrorStateMatcher {
  isErrorVisible(
    control: AbstractControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return Boolean(
      control &&
        control?.invalid &&
        (control?.dirty || (form && form.submitted))
    );
  }
}

export class OnTouchedErrorStateMatcherService implements ErrorStateMatcher {
  isErrorVisible(
    control: AbstractControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return Boolean(
      control &&
        control?.invalid &&
        (control?.touched || (form && form.submitted))
    );
  }
}
