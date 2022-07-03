import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormFieldModel } from '@shared/components/dynamic-form-field/dynamic-form-field.model';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
  myForm!: FormGroup;
  dynamicFormFields!: DynamicFormFieldModel[];
  isAddMode!: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dynamicFormFields = [
      {
        id: 'question',
        label: 'Question',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'content',
        label: 'Content',
        type: 'editor',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required, Validators.maxLength(5)],
      },
      {
        id: 'category',
        label: 'Select Category',
        type: 'select',
        selectMenuOptions: {
          1: 'Category 1',
          2: 'Category 2',
          3: 'Category 3',
          4: 'Category 4',
        },
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
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
    this.myForm.markAllAsTouched();
    //   return;
    // }

    console.log(this.myForm, 'from control component');
  }
}
