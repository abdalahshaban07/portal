import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableButtonAction } from '@shared/models/tableButtonAction';
import { PeriodicElement } from '../../models/periodic_element';

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
    id: 1,
    clientName: 'John Doe',
    company: 'ABC Company',
    joinDate: Date.now(),
    finishedProcess: 'Finished',
    statues: 'active',
    avatar: 'https://picsum.photos/500/300?random=1',
  },
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
    statues: 'not_active',
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
export class ListComponent implements OnInit {
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

  datatSet = new MatTableDataSource<any>();
  actions = ['view', 'edit', 'delete'];
  length!: number;

  constructor() {}
  ngOnInit(): void {
    this.paginator();
  }

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

  onPaginator(event: any) {
    let pageNumber = event.pageNumber;
    let pageSize = event.pageSize;
    this.paginator(pageNumber, pageSize);
  }

  // simulation paginator for table

  paginator(current_page = 1, per_page_items = 5) {
    let items = ELEMENT_DATA;
    let page = current_page || 1,
      per_page = per_page_items || 10,
      offset = (page - 1) * per_page,
      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);
    this.length = ELEMENT_DATA.length;
    this.datatSet.data = paginatedItems;
  }
}
