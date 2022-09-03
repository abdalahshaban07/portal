import { BreadcrumbService } from 'xng-breadcrumb';
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
    private quesationService: QuesationService,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.getIdFromUrl();
  }

  getIdFromUrl() {
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
      this.breadcrumbService.set('@details', data.quesation);
    });
  }
}
