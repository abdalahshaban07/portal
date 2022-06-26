import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Comment } from '@shared/models/question';
import { IClient } from '../list/list.component';

const ELEMENT_DATA: IClient[] = [
  {
    id: 1,
    name: 'John Doe',
    company: 'ABC Company',
    joinDate: Date.now(),
    statues: 'active',
    avatar: 'https://picsum.photos/500/300?random=1',
    errors: 'list of document Q1',
  },
  {
    id: 2,
    name: 'John Doe2',
    company: 'ABC Company2',
    joinDate: Date.now(),
    statues: 'active',
    avatar: 'https://picsum.photos/500/300?random=12',
    errors: 'list of document Q12',
  },
  {
    id: 3,
    name: 'John Doe3',
    company: 'ABC Company3',
    joinDate: Date.now(),
    statues: 'active',
    avatar: 'https://picsum.photos/500/300?random=3',
    errors: 'list of document Q3',
  },
];

@Component({
  selector: 'app-acceptance-history',
  templateUrl: './acceptance-history.component.html',
  styleUrls: ['./acceptance-history.component.scss'],
})
export class AcceptanceHistoryComponent implements OnInit {
  @Input() questionId: number = 1;
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      hasAvatar: false,
      cell: (element: IClient) => `${element.name}`,
    },
    {
      columnDef: 'company',
      header: 'Company',
      cell: (element: IClient) => `${element.company}`,
    },
    {
      columnDef: 'joinDate',
      header: 'Join Date',
      date: true,
      cell: (element: IClient) => `${element.joinDate}`,
    },
    {
      columnDef: 'errors',
      header: 'Errors',
      cell: (element: IClient) => `${element.errors}`,
    },
    {
      columnDef: 'statues',
      header: 'Statues',
      icon: true,
      cell: (element: IClient) => `${element.statues}`,
    },
  ];
  datatSet = new MatTableDataSource<IClient>(ELEMENT_DATA);
  constructor() {}

  ngOnInit(): void {}
}
