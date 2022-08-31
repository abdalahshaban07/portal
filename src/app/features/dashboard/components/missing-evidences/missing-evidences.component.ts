import { ShareObsService } from './../../../../shared/services/share-obs.service';
import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  DynamicFormFieldModel,
  selectMenuOptions,
} from '@shared/components/dynamic-form-field/dynamic-form-field.model';
import { ListOfValuesService } from '@shared/services/list-of-values.service';
import { AppLoaderDirective } from '@shared/directives/app-loader.directive';
import { MissingEvidencesTableComponent } from '../missing-evidences-table/missing-evidences-table.component';

@Component({
  selector: 'app-missing-evidences',
  templateUrl: './missing-evidences.component.html',
  styleUrls: ['./missing-evidences.component.scss'],
})
export class MissingEvidencesComponent implements OnInit {
  myForm!: FormGroup;
  dynamicFormFields!: DynamicFormFieldModel[];
  constructor(
    private fb: FormBuilder,
    private cdref: ChangeDetectorRef,
    private listOfValuesService: ListOfValuesService,
    public shareObsService: ShareObsService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getProjects();
    this.tracProjectChange();
  }

  createDynamicFormFields() {
    this.dynamicFormFields = [
      {
        id: 'projectId',
        label: 'Select Project',
        type: 'select',
        selectMenuOptions: this.projects,
        defaultValue: {
          value: '',
          disabled: false,
        },
        multiple: false,
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

  checkIfProjectIdExist() {
    if (this.shareObsService.projectId) {
      this.myForm.get('projectId')?.setValue(+this.shareObsService.projectId);
      this.loadQuestionsComponent();
    }
  }

  tracProjectChange() {
    this.myForm.get('projectId')?.valueChanges.subscribe((value) => {
      if (value) {
        this.shareObsService.projectId = value;
        this.loadQuestionsComponent();
      }
    });
  }

  projects: selectMenuOptions[] = [];
  getProjects() {
    if (this.shareObsService.projects) {
      this.projects.push(...this.shareObsService.projects);
      this.checkIfProjectIdExist();
    } else {
      this.listOfValuesService.getProjects().subscribe((data) => {
        this.projects.push(...data);
        this.shareObsService.projects = data;
        this.checkIfProjectIdExist();
      });
    }
  }

  @ViewChild(AppLoaderDirective, { static: true, read: ViewContainerRef })
  dynamicChild!: ViewContainerRef;

  private loadQuestionsComponent() {
    this.dynamicChild.clear();
    const questionRef = this.dynamicChild.createComponent(
      MissingEvidencesTableComponent
    );
    questionRef.instance.id = this.shareObsService.projectId;
    questionRef.instance.paramsOptions['id'] = this.shareObsService.projectId;
  }
}
