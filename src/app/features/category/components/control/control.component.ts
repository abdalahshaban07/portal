import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '@features/category/models/category';
import { CategoryService } from '@features/category/services/category.service';
import { DynamicFormFieldModel } from '@shared/components/dynamic-form-field/dynamic-form-field.model';
import { FormMode } from '@shared/Enums/formMode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
  myForm!: FormGroup;
  dynamicFormFields!: DynamicFormFieldModel[];
  formMode!: FormMode;
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private activeRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getIdFromUrl();
  }

  createDynamicFormFields() {
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
      {
        id: 'isActive',
        label: 'Is Active',
        type: 'select',
        selectMenuOptions: [
          {
            key: true,
            value: 'True',
          },
          {
            key: false,
            value: 'False',
          },
        ],
        defaultValue: {
          value: '',
          disabled: false,
        },
      },
    ];
  }

  getIdFromUrl() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) {
      this.formMode = FormMode.Edit;
      this.getItemById(id);
    } else {
      this.formMode = FormMode.Add;
    }
  }

  createForm() {
    this.createDynamicFormFields();
    this.myForm = this.fb.group({});
    this.dynamicFormFields.forEach((field) => {
      const control = this.fb.control(
        { ...field.defaultValue },
        field.validators
      );
      this.myForm.addControl(field.id, control);
    });
  }

  getItemById(id: number | string) {
    this.categoryService.get(id).subscribe((data) => {
      console.log(data);
      this.myForm.patchValue(data as ICategory);
    });
  }

  saveData() {
    if (this.myForm.invalid) return;

    const data = this.myForm.value;

    if (this.formMode === FormMode.Add) {
      this.addCertificate(data);
    } else {
      this.updateCertificate(data);
    }
  }

  addCertificate(data: ICategory) {
    this.categoryService.add(data).subscribe(() => {
      this.actionAfterAddOrUpdate('added');
    });
  }
  updateCertificate(data: ICategory) {
    this.categoryService.update(data).subscribe(() => {
      this.actionAfterAddOrUpdate('updated');
    });
  }

  actionAfterAddOrUpdate(status: 'added' | 'updated') {
    this.myForm.reset();
    this.toastr.success(`Category ${status} successfully`);
    this.router.navigate(['/category']);
  }
}
