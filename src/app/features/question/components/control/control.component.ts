import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CertificateService } from '@features/certificate/services/certificate.service';
import { IQuestion } from '@features/question/models/question';
import { QuesationService } from '@features/question/services/quesation.service';
import { DynamicFormFieldModel } from '@shared/components/dynamic-form-field/dynamic-form-field.model';
import { FormMode } from '@shared/Enums/formMode';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged } from 'rxjs';

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
    private quesationService: QuesationService,
    private activeRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dynamicFormFields = [
      {
        id: 'quesation',
        label: 'Question',
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
        type: 'editor',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [],
      },
      {
        id: 'categoryId',
        label: 'Select Category',
        type: 'select',
        selectMenuOptions: [
          {
            key: 1,
            value: 'List of Documents',
          },
          {
            key: 2,
            value: 'List of Records',
          },
          {
            key: 3,
            value: 'List of Solutions',
          },
          {
            key: 4,
            value: 'Configuration Requirements',
          },
        ],
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
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

    this.createForm();
    this.getIdFromUrl();
  }

  createForm() {
    this.myForm = this.fb.group({});
    this.dynamicFormFields.forEach((field) => {
      const control = this.fb.control(
        { ...field.defaultValue },
        field.validators
      );
      this.myForm.addControl(field.id, control);
    });
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

  getItemById(id: number | string) {
    this.quesationService.get(id).subscribe((data) => {
      console.log(data.data);
      let question = data.data as IQuestion;
      this.myForm.patchValue(question);
    });
  }

  saveData() {
    if (this.myForm.invalid) return;
    const data = this.myForm.value;
    if (this.formMode === FormMode.Add) {
      this.addQuestion(data);
    } else {
      this.updateQuestion(data);
    }
  }

  addQuestion(data: IQuestion) {
    console.log(data);
    return;
    this.quesationService.add(data).subscribe(() => {
      this.actionAfterAddOrUpdate('added');
    });
  }
  updateQuestion(data: IQuestion) {
    this.quesationService.update(data).subscribe(() => {
      this.actionAfterAddOrUpdate('updated');
    });
  }

  actionAfterAddOrUpdate(status: 'added' | 'updated') {
    this.myForm.reset();
    this.toastr.success(`Certificate ${status} successfully`);
    this.router.navigate(['/questions']);
  }
}
