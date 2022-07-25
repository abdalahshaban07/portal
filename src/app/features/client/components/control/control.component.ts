import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from '@features/client/models/client';
import { ClientService } from '@features/client/services/client.service';
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
  id!: number | string;
  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
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
        id: 'email',
        label: 'Email',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required, Validators.email],
      },
      {
        id: 'address',
        label: 'Address',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'phone',
        label: 'Phone',
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
    this.id = this.activeRoute.snapshot.paramMap.get('id') as number | string;
    if (this.id) {
      this.formMode = FormMode.Edit;
      this.getItemById(this.id);
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
    this.clientService.get(id).subscribe((data) => {
      console.log(data);
      this.myForm.patchValue(data.data as IClient);
    });
  }

  saveData() {
    if (this.myForm.invalid) return;

    let data = this.myForm.value;

    if (this.formMode === FormMode.Add) {
      this.addCertificate(data);
    } else {
      data = { ...data, id: this.id };
      this.updateCertificate(data);
    }
  }

  addCertificate(data: IClient) {
    this.clientService.add(data).subscribe(() => {
      this.actionAfterAddOrUpdate('added');
    });
  }
  updateCertificate(data: IClient) {
    this.clientService.update(data).subscribe(() => {
      this.actionAfterAddOrUpdate('updated');
    });
  }

  actionAfterAddOrUpdate(status: 'added' | 'updated') {
    this.myForm.reset();
    this.toastr.success(`Client ${status} successfully`);
    this.router.navigate(['/client']);
  }
}
