import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TableButtonAction } from '@shared/models/tableButtonAction';

export interface IClient {
  id: number;
  name: string;
  company: string;
  joinDate: number;
  errors: string;
  statues: string;
  avatar: string;
}

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
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      hasAvatar: true,
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
  actions = ['view', 'delete'];

  constructor(private readonly router: Router) {}

  onTableAction(event: TableButtonAction) {
    switch (event.name) {
      case 'delete':
        console.log(this.datatSet.data);
        this.datatSet.data = this.datatSet.data.filter(
          (element) => element.id !== event.value?.id
        );
        break;
      case 'view':
        this.router.navigate(['/check-errors/view/22']);
    }
  }
}
