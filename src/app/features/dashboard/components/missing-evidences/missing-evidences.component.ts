import { ShareObsService } from './../../../../shared/services/share-obs.service';
import { BehaviorSubject } from 'rxjs';
import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ICategoryCard } from '@shared/components/category-card/category-card.component';
import {
  DynamicFormFieldModel,
  selectMenuOptions,
} from '@shared/components/dynamic-form-field/dynamic-form-field.model';
import { ListOfValuesService } from '@shared/services/list-of-values.service';
import { AppLoaderDirective } from '@shared/directives/app-loader.directive';
import { listQuestionComponent } from '@features/question/components/list/list.component';
import { IQuestion } from '@features/question/models/question';
import { TableColumn, typeColumn } from '@shared/models/tableColumn';
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
    this.tracProjectChange();
  }

  createDynamicFormFields() {
    this.dynamicFormFields = [
      {
        id: 'projectId',
        label: 'Select Project',
        type: 'select',
        selectMenuOptions: this.Projects,
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

  tracProjectChange() {
    this.myForm.get('projectId')?.valueChanges.subscribe((value) => {
      if (value) {
        this.shareObsService.projectId = value;
        this.loadQuestionsComponent();
      }
    });
  }

  get Projects() {
    let projects: selectMenuOptions[] = [];
    this.listOfValuesService.getProjects().subscribe((data) => {
      projects.push(...data);
    });
    return projects;
  }

  @ViewChild(AppLoaderDirective, { static: true, read: ViewContainerRef })
  dynamicChild!: ViewContainerRef;

  private loadQuestionsComponent() {
    this.dynamicChild.clear();
    const questionRef = this.dynamicChild.createComponent(
      MissingEvidencesTableComponent
    );
    questionRef.instance.id = this.shareObsService.projectId;
  }
}
