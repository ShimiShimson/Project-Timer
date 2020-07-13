import { AbstractControl, ValidatorFn } from "@angular/forms";

export function passwordValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'incorrectPassword': {value: control.value}} : null;
    };
  }