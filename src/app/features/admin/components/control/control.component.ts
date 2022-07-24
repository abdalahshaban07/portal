import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicFormFieldModel } from '@shared/components/dynamic-form-field/dynamic-form-field.model';
import { mustMatch } from '@shared/services/MustMatchPassword';

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
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required, Validators.email],
      },
      {
        id: 'password',
        label: 'Password',
        type: 'password',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [mustMatch('password')],
      },
      {
        id: 'position',
        label: 'Position',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'permission',
        label: 'Permission',
        type: 'toggle',
        // selectMenuOptions: {
        //   Admin: 'Admin',
        //   Editor: 'Editor',
        //   Moderator: 'Moderator',
        // },
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
    ];

    this.createForm();
    this.getUser();
  }

  createForm() {
    this.myForm = this.fb.group({});
    this.dynamicFormFields.forEach((field) => {
      const control = this.fb.control(
        { ...field.defaultValue },
        field.validators
      );
      this.myForm.addControl(field.id, control);
    });
  }

  getUser() {
    const user = {
      name: 'abdlah',
      email: 'abdlah@gmail.com',
      password: '123456',
      position: 'developer',
      permission: ['Admin', 'Editor'],
    };

    setTimeout(() => {
      this.myForm.patchValue(user);
    }, 2000);
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
