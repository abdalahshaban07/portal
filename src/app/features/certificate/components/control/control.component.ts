import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICertificate } from '@features/certificate/models/certificate.model';
import { CertificateService } from '@features/certificate/services/certificate.service';
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
    private certificateService: CertificateService,
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
        selectMenuOptions: {
          true: true,
          false: false,
        },
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
    this.certificateService.get(id).subscribe((data) => {
      console.log(data);
      this.myForm.patchValue(data.data as ICertificate);
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

  addCertificate(data: ICertificate) {
    this.certificateService.add(data).subscribe(() => {
      this.actionAfterAddOrUpdate('added');
    });
  }
  updateCertificate(data: ICertificate) {
    this.certificateService.update(data).subscribe(() => {
      this.actionAfterAddOrUpdate('updated');
    });
  }

  actionAfterAddOrUpdate(status: 'added' | 'updated') {
    this.myForm.reset();
    this.toastr.success(`Certificate ${status} successfully`);
    this.router.navigate(['/certificate']);
  }
}
