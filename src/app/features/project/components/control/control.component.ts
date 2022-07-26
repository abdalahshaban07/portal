import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IClientUser } from '@features/client-user/models/client-user';
import { IProject } from '@features/project/models/project';
import { ProjectService } from '@features/project/services/project.service';
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
    private projectService: ProjectService,
    private listOfValuesService: ListOfValuesService,
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
        selectMenuOptions: this.Clients,
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'certificateId',
        label: 'Certificate',
        type: 'select',
        selectMenuOptions: this.Certifcates,
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'projectConsultans',
        label: 'Consultants',
        type: 'select',
        selectMenuOptions: this.Consultants,
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
        multiple: true,
      },
      {
        id: 'description',
        label: 'Description',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'projectCode',
        label: 'Project Code',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'startDate',
        label: 'Start Date',
        type: 'date',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'endDate',
        label: 'End Date',
        type: 'date',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
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

  get Clients() {
    let clients: selectMenuOptions[] = [];
    this.listOfValuesService.getClients().subscribe((data) => {
      clients.push(...data);
    });
    return clients;
  }

  get Certifcates() {
    let certifcates: selectMenuOptions[] = [];
    this.listOfValuesService.getCertifcates().subscribe((data) => {
      certifcates.push(...data);
    });
    return certifcates;
  }

  get Consultants() {
    let consultants: selectMenuOptions[] = [];
    this.listOfValuesService.getConsultants().subscribe((data) => {
      consultants.push(...data);
    });
    return consultants;
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
    this.projectService.get(id).subscribe((data) => {
      console.log(data);
      this.myForm.patchValue(data.data as IProject);
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

  addCertificate(data: IProject) {
    this.projectService.add(data).subscribe(() => {
      this.actionAfterAddOrUpdate('added');
    });
  }
  updateCertificate(data: IProject) {
    this.projectService.update(data).subscribe(() => {
      this.actionAfterAddOrUpdate('updated');
    });
  }

  actionAfterAddOrUpdate(status: 'added' | 'updated') {
    this.myForm.reset();
    this.toastr.success(`Project ${status} successfully`);
    this.router.navigate(['/project']);
  }
}
