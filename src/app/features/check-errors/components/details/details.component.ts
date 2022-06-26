import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '@shared/models/question';

const titles: { [key: string]: string } = {
  documents: 'List Of Documents',
  records: 'List Of Records',
  solutions: 'List Of Solutions',
  configuration: 'Configuration Requirements',
};

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  list!: string;
  questions: Question[] = [];

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getList();
    this.questions = [
      {
        id: 1,
        title: '1-Business Description / Services Information',
        description: '',
        note: 'Note: This is one of the mandatory document. This document should contain the below information in details.',
        content: [
          'Describe what is the nature of your organization business overall (what kind of work you do, what kind of clients you have, what service you provide to your clients etc.)',
          'Describe how and Why you stores, processes, and/or transmits cardholder data',
          'Identify the types of payment channels your business/ services supports overall , such as card-present and card-not-present (for example, mail order/telephone order (MOTO), e-commerce) etc.',
          'If you are a service Provider by any chance your organization services may impact your customer Card Holder data security environment - If yes, How explain.',
          'If your organization connecting to any other entities for payment processing and any other purpose, please mention the same and mention the purpose and whom you are connecting',
        ],

        statues: false,
        files: [
          {
            id: 1,
            name: 'Business Description.pdf',
            type: 'application/pdf',
            size: 1024,
            url: 'https://www.google.com/',
            status: true,
          },
        ],
        comments: [],
      },
    ];
  }

  getList() {
    this.activeRoute.queryParams.subscribe(
      (params) => (this.list = titles[params['list']])
    );
  }

  trackByFn(index: number, item: Question) {
    return item.id;
  }
}
