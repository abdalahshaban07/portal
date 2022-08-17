import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuestion } from '@features/question/models/question';
import { QuesationService } from '@features/question/services/quesation.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id!: number | string;
  questionId!: string | number;
  question!: IQuestion;
  constructor(
    private activeRoute: ActivatedRoute,
    private quesationService: QuesationService
  ) {}

  ngOnInit(): void {
    this.getIdFromUrl();
  }

  getIdFromUrl() {
    const apiUrl = this.quesationService.APIUrl.split('/');
    apiUrl.pop();
    apiUrl.push('Quesation');
    this.quesationService.APIUrl = apiUrl.join('/');
    this.id = this.activeRoute.snapshot.paramMap.get('id') as string;
    this.questionId = this.activeRoute.snapshot.queryParamMap.get(
      'quesation'
    ) as string;
    if (this.questionId) {
      this.getQuestionDetails();
    }
  }

  getQuestionDetails() {
    this.quesationService.get(this.questionId).subscribe((data) => {
      this.question = data;
    });
  }
}
