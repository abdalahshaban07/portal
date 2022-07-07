import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicFormFieldModel } from '@shared/components/dynamic-form-field/dynamic-form-field.model';

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
        id: 'description',
        label: 'Description',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
      },
    ];

    this.createForm();
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
