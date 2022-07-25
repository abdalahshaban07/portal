import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientUserService } from '@features/client-user/services/client-user.service';
import { IClientUser } from '@features/client-user/models/client-user';
import {
  DynamicFormFieldModel,
  selectMenuOptions,
} from '@shared/components/dynamic-form-field/dynamic-form-field.model';
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
    private clientUserService: ClientUserService,
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
        id: 'clientId',
        label: 'Company',
        type: 'select',
        selectMenuOptions: this.getClientsIds(),
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
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
        id: 'genderId',
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
        id: 'countryId',
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
        id: 'cityId',
        label: 'City',
        type: 'select',
        selectMenuOptions: this.getCityIds(),
        defaultValue: {
          value: '',
          disabled: false,
        },
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
        key: 1,
        value: 'Alex',
      },
      {
        key: 2,
        value: 'Cairo',
      },
    ];
    // return this.clientUserService.getCityIds();
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
    // return this.clientUserService.getCountryIds();
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

  getClientsIds() {
    let clients: selectMenuOptions[] = [];
    this.clientUserService.getClients().subscribe((data) => {
      clients.push(...data);
    });
    return clients;
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
    this.clientUserService.get(id).subscribe((data) => {
      console.log(data);
      this.myForm.patchValue(data.data as IClientUser);
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

  addCertificate(data: IClientUser) {
    this.clientUserService.add(data).subscribe(() => {
      this.actionAfterAddOrUpdate('added');
    });
  }
  updateCertificate(data: IClientUser) {
    this.clientUserService.update(data).subscribe(() => {
      this.actionAfterAddOrUpdate('updated');
    });
  }

  actionAfterAddOrUpdate(status: 'added' | 'updated') {
    this.myForm.reset();
    this.toastr.success(`User ${status} successfully`);
    this.router.navigate(['/client-user']);
  }
}
