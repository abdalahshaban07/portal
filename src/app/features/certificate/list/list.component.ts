import { DatePipe } from '@angular/common';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TableButtonAction } from '@shared/models/tableButtonAction';

export interface ICertificate {
  id: number | string;
  name: string;
  description: string;
  createdAt?: number;
  updatedAt?: number;
  numberOfProjects: number;
}

const ELEMENT_DATA: ICertificate[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Certificate ${i + 1}`,
  description: `Description ${i + 1}`,
  createdAt: Date.now(),
  numberOfProjects: i + 1,
}));

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DatePipe],
})
export class ListComponent implements OnInit {
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: ICertificate) => `${element.name}`,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: ICertificate) => `${element.description}`,
    },
    {
      columnDef: 'numberOfProjects',
      header: 'Number of projects',
      cell: (element: ICertificate) => `${element.numberOfProjects}`,
    },
    {
      columnDef: 'createdAt',
      header: 'Created at',
      cell: (element: ICertificate) =>
        this.datePipe.transform(element.createdAt, 'dd/MMM/yyyy') as string,
    },
  ];

  datatSet = new MatTableDataSource<ICertificate>(ELEMENT_DATA);
  actions = ['view', 'delete'];
  length!: number;

  constructor(private readonly router: Router, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.paginator();
  }

  onTableAction(event: TableButtonAction) {
    switch (event.name) {
      case 'delete':
        console.log(this.datatSet.data);
        this.datatSet.data = this.datatSet.data.filter(
          (element) => element.id !== event.value?.id
        );
        break;
      case 'view':
        this.router.navigate(['/certificate/view/2']);
    }
  }

  onPaginator(event: any) {
    let pageNumber = event.pageNumber;
    let pageSize = event.pageSize;
    this.paginator(pageNumber, pageSize);
  }

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
