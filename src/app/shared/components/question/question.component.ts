import { Component, Input, OnInit } from '@angular/core';
import { Question } from '@shared/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question!: Question;
  constructor() {}

  ngOnInit(): void {}

  numToSSColumnLetter(num: number): string {
    return String.fromCharCode(65 + num).toLowerCase();
  }
}
