import { Subscription } from 'rxjs';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAdmin } from '@features/admin/models/admin';
import { AdminService } from '@features/admin/services/admin.service';
import {
  DynamicFormFieldModel,
  selectMenuOptions,
} from '@shared/components/dynamic-form-field/dynamic-form-field.model';
import { FormMode } from '@shared/Enums/formMode';
import { ListOfValuesService } from '@shared/services/list-of-values.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit, OnDestroy {
  myForm!: FormGroup;
  dynamicFormFields!: DynamicFormFieldModel[];
  formMode!: FormMode;
  id!: number | string;
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private listOfValuesService: ListOfValuesService,
    private activeRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getIdFromUrl();
    this.createForm();
    this.getRoles();
    this.tracCountryChange();
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
        validators: [Validators.required, Validators.maxLength(50)],
      },
      {
        id: 'email',
        label: 'Email',
        type: 'text',
        defaultValue: {
          value: 'Admin@example.com',
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
          value: 'Admin',
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
        validators: [Validators.required, Validators.maxLength(60)],
      },
      {
        id: 'phone',
        label: 'Phone',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.minLength(9), Validators.maxLength(15)],
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
      {
        id: 'role',
        label: 'role',
        type: 'toggle',
        selectMenuOptions: this.roles,
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
  countrySubscribtion: Subscription | undefined;
  tracCountryChange() {
    this.countrySubscribtion = this.myForm
      .get('countryId')
      ?.valueChanges.subscribe((value) => {
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

  roles: selectMenuOptions[] = [];
  getRoles() {
    this.listOfValuesService.getRoles().subscribe((data) => {
      this.roles.push(...data);
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
    this.adminService.get(id).subscribe((data) => {
      this.myForm.patchValue(data as IAdmin);
      this.myForm.get('cityId')?.setValue(data.cityId);
    });
  }

  saveData() {
    if (this.myForm.invalid) return;

    let data = this.myForm.value;

    data.role = this.roles.find((role) => role.key == data.role)?.value;

    if (this.formMode === FormMode.Add) {
      data = { ...data, id: 0 };
      this.addAdmin(data);
    } else {
      data = { ...data, id: this.id };
      this.updateAdmin(data);
    }
  }

  addAdmin(data: IAdmin) {
    this.adminService.add(data).subscribe(() => {
      this.actionAfterAddOrUpdate('added');
    });
  }
  updateAdmin(data: IAdmin) {
    this.adminService.update(data).subscribe(() => {
      this.actionAfterAddOrUpdate('updated');
    });
  }

  actionAfterAddOrUpdate(status: 'added' | 'updated') {
    this.myForm.reset();
    this.toastr.success(`${status} successfully`);
    this.router.navigate(['/admin']);
  }

  ngOnDestroy(): void {
    this.countrySubscribtion?.unsubscribe();
  }
}
