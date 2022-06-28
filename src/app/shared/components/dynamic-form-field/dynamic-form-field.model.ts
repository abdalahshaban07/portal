import { ValidatorFn } from '@angular/forms';

export interface DynamicFormFieldModel {
  id: string;
  type: 'text' | 'email' | 'select' | 'password' | 'textarea' | 'file';
  label?: string;
  selectMenuOptions?: { [key: string]: string };
  value?: string;
  validators?: ValidatorFn[];
}
