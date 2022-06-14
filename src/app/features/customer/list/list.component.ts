import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableButtonAction } from '@shared/models/tableButtonAction';
import { PeriodicElement } from '../models/periodic_element';

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    clientName: 'John Doe',
    company: 'ABC Company',
    joinDate: Date.now(),
    finishedProcess: 'Finished',
    statues: 'active',
    avatar: 'https://picsum.photos/500/300?random=1',
  },
  {
    id: 2,
    clientName: 'Ernest Garrett',
    company: 'XYZ Company',
    joinDate: Date.now(),
    finishedProcess: 'Finished',
    statues: 'waiting',
    avatar: 'https://picsum.photos/500/300?random=2',
  },
  {
    id: 3,
    clientName: 'Peter Parker',
    company: 'ABC Company',
    joinDate: Date.now(),
    finishedProcess: 'Finished',
    statues: 'not_active',
    avatar: 'https://picsum.photos/500/300?random=3',
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
      columnDef: 'clientName',
      header: 'Client Name',
      hasAvatar: true,
      cell: (element: PeriodicElement) => `${element.clientName}`,
    },
    {
      columnDef: 'company',
      header: 'Company',
      cell: (element: PeriodicElement) => `${element.company}`,
    },
    {
      columnDef: 'joinDate',
      header: 'Join Date',
      date: true,
      cell: (element: PeriodicElement) => `${element.joinDate}`,
    },
    {
      columnDef: 'finishedProcess',
      header: 'Finished Process',
      cell: (element: PeriodicElement) => `${element.finishedProcess}`,
    },
    {
      columnDef: 'statues',
      header: 'Statues',
      icon: true,
      cell: (element: PeriodicElement) => `${element.statues}`,
    },
  ];
  datatSet = new MatTableDataSource<any>(ELEMENT_DATA);
  actions = ['view', 'edit', 'delete'];

  constructor() {}

  onTableAction(event: TableButtonAction) {
    switch (event.name) {
      case 'edit':
        console.log('edit');
        break;
      case 'delete':
        console.log(this.datatSet.data);
        this.datatSet.data = this.datatSet.data.filter(
          (element) => element.id !== event.value?.id
        );
        console.log('delete');

        break;
      case 'view':
        console.log('view');
    }
  }
}
