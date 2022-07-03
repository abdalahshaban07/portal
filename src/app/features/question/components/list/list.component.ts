import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PeriodicElement } from '@features/customer/models/periodic_element';
import { TableButtonAction } from '@shared/models/tableButtonAction';

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
  actions = ['edit', 'delete'];
  length!: number;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.paginator();
  }

  onTableAction(event: TableButtonAction) {
    switch (event.name) {
      case 'edit':
        console.log('edit');
        this.router.navigate(['edit/', 1], { relativeTo: this.route });
        break;
      case 'delete':
        console.log(this.datatSet.data);
        this.datatSet.data = this.datatSet.data.filter(
          (element) => element.id !== event.value?.id
        );
        console.log('delete');
        break;
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
