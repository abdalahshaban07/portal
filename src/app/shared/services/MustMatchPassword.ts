import { FormControl } from '@angular/forms';

// export function mustMatch(
//   password: string,
//   confirmPassword: string
// ): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const FormGroup = control as FormGroup;
//     const passwordValue = FormGroup.get(password)?.value;
//     const confirmPasswordValue = FormGroup.get(confirmPassword)?.value;

//     return passwordValue === confirmPasswordValue
//       ? null
//       : FormGroup.get(confirmPassword)?.setErrors({ mustMatch: true }) ?? null;
//   };
// }

export function mustMatch(password: string) {
  return function (control: FormControl) {
    const confirmPasswordValue = control.value;
    const passwordValue = control.parent?.get(password)?.value;

    if (confirmPasswordValue !== passwordValue) {
      return {
        mustMatch: true,
      };
    }

    return null;
  };
}
