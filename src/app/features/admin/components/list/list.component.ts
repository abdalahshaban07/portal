import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminList } from '@features/admin/models/admin-list';
import { TableButtonAction } from '@shared/models/tableButtonAction';

const ELEMENT_DATA: AdminList[] = [
  {
    id: 1,
    name: 'John Doe',
    company: 'ABC Company',
    joinDate: '01/01/2019',
    status: 'active',
    avatar: 'https://picsum.photos/500/300?random=1',
    role: 'admin',
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'ABC Company',
    joinDate: '01/01/2019',
    status: 'active',
    avatar: 'https://picsum.photos/500/300?random=1',
    role: 'admin',
  },
  {
    id: 3,
    name: 'John Doe',
    company: 'ABC Company',
    joinDate: '01/01/2019',
    status: 'active',
    avatar: 'https://picsum.photos/500/300?random=1',
    role: 'admin',
  },
  {
    id: 4,
    name: 'John Doe',
    company: 'ABC Company',
    joinDate: '01/01/2019',
    status: 'active',
    avatar: 'https://picsum.photos/500/300?random=1',
    role: 'admin',
  },
  {
    id: 5,
    name: 'John Doe',
    company: 'ABC Company',
    joinDate: '01/01/2019',
    status: 'active',
    avatar: 'https://picsum.photos/500/300?random=1',
    role: 'admin',
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
      columnDef: 'name',
      header: 'Name',
      hasAvatar: true,
      cell: (element: AdminList) => `${element.name}`,
    },
    {
      columnDef: 'company',
      header: 'Company',
      cell: (element: AdminList) => `${element.company}`,
    },
    {
      columnDef: 'joinDate',
      header: 'Join Date',
      date: true,
      cell: (element: AdminList) => `${element.joinDate}`,
    },
    {
      columnDef: 'role',
      header: 'Role',
      date: true,
      cell: (element: AdminList) => `${element.role}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      icon: true,
      cell: (element: AdminList) => `${element.status}`,
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
