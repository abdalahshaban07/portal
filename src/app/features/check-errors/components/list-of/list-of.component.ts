import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Question } from '@shared/models/question';

const titles: { [key: string]: string } = {
  documents: 'List Of Documents',
  records: 'List Of Records',
  solutions: 'List Of Solutions',
  configuration: 'Configuration Requirements',
};

const QUESTIONS = [
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
  {
    id: 2,
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
  {
    id: 3,
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
  {
    id: 4,
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
  {
    id: 5,
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
  {
    id: 6,
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
  {
    id: 7,
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
  {
    id: 8,
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
  {
    id: 9,
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
  {
    id: 10,
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

@Component({
  selector: 'app-list-of',
  templateUrl: './list-of.component.html',
  styleUrls: ['./list-of.component.scss'],
})
export class ListOfComponent implements OnInit {
  list!: string;
  length: number = 100;

  questions!: MatTableDataSource<Question>;

  disabledConfirm = true;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getList();
    this.questions = new MatTableDataSource<Question>(QUESTIONS);
    this.length = QUESTIONS.length;
    this.onPageChange();
  }

  getList() {
    this.activeRoute.params.subscribe(
      (params) => (this.list = titles[params['list']])
    );

    console.log(this.list);
  }

  trackByFn(index: number, item: Question) {
    return item.id;
  }

  getServerData(event?: PageEvent) {
    console.log(event);
  }

  onPageChange(event?: any) {
    let pageNumber,
      pageSize = 5;
    if (event) {
      pageNumber = event.pageNumber;
      pageSize = event.pageSize;
    }
    let items = QUESTIONS;
    let page = pageNumber || 1,
      per_page = pageSize || 10,
      offset = (page - 1) * per_page,
      paginatedItems = items.slice(offset).slice(0, pageSize),
      total_pages = Math.ceil(items.length / per_page);
    this.length = QUESTIONS.length;
    this.questions.data = paginatedItems;
    console.log(paginatedItems, 'paginatedItems');
  }
}
