import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormFieldModel } from '@shared/components/dynamic-form-field/dynamic-form-field.model';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss'],
})
export class ReplyComponent implements OnInit {
  id!: string | number;
  question!: {};
  replyForm!: FormGroup;
  questionForm!: FormGroup;
  replyFormFields!: DynamicFormFieldModel[];
  questionFormFields!: DynamicFormFieldModel[];

  constructor(private activeRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    // get question id from params
    // patch value into question form
    // add reply form

    this.getIdFromParams();
    this.question = this.getQuestionById(this.id);

    this.questionFormFields = [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: true,
        },
        validators: [],
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        defaultValue: {
          value: '',
          disabled: true,
        },
        validators: [],
      },
      {
        id: 'question',
        label: 'Question',
        type: 'textarea',
        defaultValue: {
          value: '',
          disabled: true,
        },
        rows: 7,
        validators: [],
      },
    ];
    this.replyFormFields = [
      {
        id: 'replyName',
        label: 'Name',
        type: 'text',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
      {
        id: 'replyEmail',
        label: 'Email',
        type: 'email',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required, Validators.email],
      },
      {
        id: 'reply',
        label: 'Reply',
        type: 'textarea',
        defaultValue: {
          value: '',
          disabled: false,
        },
        validators: [Validators.required],
      },
    ];

    this.createQuestionForm();
    this.createReplyForm();

    this.questionForm.patchValue(this.question);
  }

  getIdFromParams() {
    this.activeRoute.queryParams.subscribe(
      (params) => (this.id = params['id'])
    );
  }

  getQuestionById(id: number | string) {
    return {
      name: 'Ahmed mohamed',
      email: 'ahmedmohamed@gmail.com',
      question: 'What is the best way to learn Angular?',
    };
  }

  createReplyForm() {
    this.replyForm = this.fb.group({});
    this.createForm(this.replyFormFields, this.replyForm);
  }

  createQuestionForm() {
    this.questionForm = this.fb.group({});
    this.createForm(this.questionFormFields, this.questionForm);
  }

  createForm(fields: DynamicFormFieldModel[], form: FormGroup) {
    fields.forEach((field) => {
      const control = this.fb.control(
        { ...field.defaultValue },
        field.validators
      );
      form.addControl(field.id, control);
    });
  }

  sendReply() {
    this.replyForm.markAllAsTouched();
  }
}
