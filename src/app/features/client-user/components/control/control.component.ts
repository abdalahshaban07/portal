import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
import { ListOfValuesService } from '@shared/services/list-of-values.service';

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
    private listOfValuesService: ListOfValuesService,
    private activeRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getIdFromUrl();
    this.createForm();
    this.tracCountryChange();
  }

  createDynamicFormFields() {
    this.dynamicFormFields = [
      {
        id: 'clientId',
        label: 'Company',
        type: 'select',
        selectMenuOptions: this.Client,
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
        validators: [Validators.required, Validators.maxLength(50)],
      },
      {
        id: 'email',
        label: 'Email',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [
          Validators.required,
          Validators.email,
          Validators.maxLength(50),
        ],
      },
      {
        id: 'username',
        label: 'Username',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required, Validators.maxLength(60)],
      },
      {
        id: 'password',
        label: 'Password',
        type: 'password',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required, Validators.maxLength(50)],
      },
      {
        id: 'phone',
        label: 'Phone',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [
          Validators.minLength(9),
          Validators.maxLength(15),
          Validators.pattern('^[0-9]*$'),
        ],
      },
      {
        id: 'genderId',
        label: 'Gender',
        type: 'select',
        selectMenuOptions: this.Gender,
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
        selectMenuOptions: this.Country,
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
        selectMenuOptions: this.cities,
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

  get Client() {
    let clients: selectMenuOptions[] = [];
    this.listOfValuesService.getClients().subscribe((data) => {
      clients.push(...data);
    });
    return clients;
  }

  get Gender() {
    let gender: selectMenuOptions[] = [];
    this.listOfValuesService.getGender().subscribe((data) => {
      gender.push(...data);
    });
    return gender;
  }

  get Country() {
    let country: selectMenuOptions[] = [];
    this.listOfValuesService.getCountries().subscribe((data) => {
      country.push(...data);
    });
    return country;
  }

  tracCountryChange() {
    this.myForm.get('countryId')?.valueChanges.subscribe((value) => {
      this.myForm.get('cityId')?.setValue('');
      this.cities.length = 0;
      this.getCities(value);
      this.cdref.detectChanges();
    });
  }
  cities: selectMenuOptions[] = [];

  getCities(countryId: string | number) {
    this.listOfValuesService.getCities(countryId).subscribe((data) => {
      this.cities.push(...data);
    });
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
      this.myForm.patchValue(data as IClientUser);
      this.myForm.get('cityId')?.setValue(data.cityId);
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
    this.myForm.reset('', { emitEvent: false });
    this.toastr.success(`User ${status} successfully`);
    this.router.navigate(['/client-user']);
  }
}
