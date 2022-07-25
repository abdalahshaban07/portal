import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAdmin } from '@features/admin/models/admin';
import { AdminService } from '@features/admin/services/admin.service';
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
    private adminService: AdminService,
    private activeRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getIdFromUrl();
    this.createForm();
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
        id: 'username',
        label: 'Username',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
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
        id: 'phone',
        label: 'Phone',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
      },
      {
        id: 'gender',
        label: 'Gender',
        type: 'select',
        selectMenuOptions: this.getGenderIds(),
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'country',
        label: 'Country',
        type: 'select',
        selectMenuOptions: this.getCountryIds(),
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'city',
        label: 'City',
        type: 'select',
        selectMenuOptions: this.getCityIds(),
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'role',
        label: 'role',
        type: 'toggle',
        selectMenuOptions: this.getPrmissions(),
        defaultValue: {
          value: '',
          disabled: false,
        },
        multiple: false,
        validators: [Validators.required],
      },
    ];

    /* Filtering the password field from the dynamic form fields array if the form mode is edit. */
    // if (FormMode.Edit === this.formMode) {
    //   this.dynamicFormFields = this.dynamicFormFields.filter(
    //     (field) => field.id !== 'password'
    //   );
    // }
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

  getCityIds() {
    return [
      {
        key: 'Alex',
        value: 'AlexV',
      },
      {
        key: 2,
        value: 'Cairo',
      },
    ];
  }

  getCountryIds() {
    return [
      {
        key: 1,
        value: 'Egypt',
      },
      {
        key: 2,
        value: 'KSA',
      },
    ];
  }

  getGenderIds() {
    return [
      {
        key: 1,
        value: 'Male',
      },
      {
        key: 2,
        value: 'Female',
      },
    ];
  }

  getPrmissions() {
    return [
      {
        key: 'Admin',
        value: 'Admin',
      },
      {
        key: 'Editor',
        value: 'Editor',
      },
      {
        key: 'Moderator',
        value: 'Moderator',
      },
      {
        key: 'Consultant',
        value: 'Consultant',
      },
    ];
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
    this.adminService.get(id).subscribe((data) => {
      console.log(data);
      this.myForm.patchValue(data.data as IAdmin);
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

  addCertificate(data: IAdmin) {
    this.adminService.add(data).subscribe(() => {
      this.actionAfterAddOrUpdate('added');
    });
  }
  updateCertificate(data: IAdmin) {
    this.adminService.update(data).subscribe(() => {
      this.actionAfterAddOrUpdate('updated');
    });
  }

  actionAfterAddOrUpdate(status: 'added' | 'updated') {
    this.myForm.reset();
    this.toastr.success(`${status} successfully`);
    this.router.navigate(['/admin']);
  }
}
