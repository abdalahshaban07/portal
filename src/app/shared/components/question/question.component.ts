import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from '@features/question/models/question';
import { Question } from '@shared/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question!: IQuestion;
  constructor() {}

  ngOnInit(): void {}
}
