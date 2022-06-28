import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormFieldModel } from '@shared/components/dynamic-form-field/dynamic-form-field.model';
import { mustMatch } from '@shared/services/MustMatchPassword';
import { requiredFileType } from '@shared/services/requiredFileType';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
  myForm!: FormGroup;
  dynamicFormFields!: DynamicFormFieldModel[];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dynamicFormFields = [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: '',
        validators: [Validators.required],
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        value: '',
        validators: [Validators.required, Validators.email],
      },
      {
        id: 'password',
        label: 'Password',
        type: 'password',
        value: '',
        validators: [Validators.required],
      },
      {
        id: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        value: '',
        validators: [mustMatch('password')],
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'text',
        value: '',
        validators: [Validators.required, Validators.pattern('^[0-9]+$')],
      },
      {
        id: 'gender',
        label: 'Gender',
        type: 'select',
        selectMenuOptions: {
          male: 'Male',
          female: 'Female',
        },
        value: '',
        validators: [Validators.required],
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
        value: '',
        validators: [Validators.required],
      },
      {
        id: 'country',
        label: 'Country',
        type: 'select',
        selectMenuOptions: {
          eg: 'Egypt',
          ksa: 'Saudi Arabia',
        },
        value: '',
        validators: [Validators.required],
      },
      // {
      //   id: 'profileImage',
      //   type: 'file',
      //   value: '',
      //   validators: [Validators.required, requiredFileType('png')],
      // },
    ];

    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({});
    this.dynamicFormFields.forEach((field) => {
      const control = this.fb.control(field.value, field.validators);
      this.myForm.addControl(field.id, control);
    });
  }

  saveData() {
    // check if add or edit
    // if add, add to db
    // if edit, update db
    // if (this.myForm.invalid) {
    //   this.myForm.markAllAsTouched();
    //   return;
    // }

    console.log(this.myForm.value, 'from control component');
  }
}
