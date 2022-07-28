import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
export class ControlComponent implements OnInit {
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
        selectMenuOptions: this.Roles,
        defaultValue: {
          value: '',
          disabled: false,
        },
        multiple: !!1,
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

  get Roles() {
    let roles: selectMenuOptions[] = [];
    this.listOfValuesService.getRoles().subscribe((data) => {
      roles.push(...data);
    });
    return roles;
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
