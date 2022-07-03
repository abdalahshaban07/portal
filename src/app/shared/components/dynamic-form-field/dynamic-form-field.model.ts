import { ValidatorFn } from '@angular/forms';

export interface DynamicFormFieldModel {
  id: string;
  type:
    | 'text'
    | 'email'
    | 'select'
    | 'password'
    | 'textarea'
    | 'file'
    | 'editor';
  label?: string;
  selectMenuOptions?: { [key: string]: string };
  defaultValue?: DefaultValue;
  validators?: ValidatorFn[];
  rows?: number;
}

type DefaultValue = { value: string; disabled: boolean };
