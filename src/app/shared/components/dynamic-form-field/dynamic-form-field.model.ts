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
    | 'editor'
    | 'toggle';
  label?: string;
  // selectMenuOptions?: { [key: number | string]: string | boolean | number };
  selectMenuOptions?: selectMenuOptions[];
  defaultValue?: DefaultValue;
  validators?: ValidatorFn[];
  rows?: number;
}

type DefaultValue = { value: string; disabled: boolean };
type selectMenuOptions = {
  key: number | string | boolean;
  value: string | boolean | number;
};
