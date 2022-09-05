import { Component, Injector, OnInit } from '@angular/core';
import { IAdmin } from '@features/admin/models/admin';
import { AdminService } from '@features/admin/services/admin.service';
import { TableConsts } from '@shared/components/custom-table/consts/table';
import { CustomTableComponent } from '@shared/components/custom-table/custom-table.component';
import { ListTableService } from '@shared/components/custom-table/list-table.service';
import { TableColumn } from '@shared/models/tableColumn';

@Component({
  selector: 'app-list',
  templateUrl:
    '../../../../shared/components/custom-table/custom-table.component.html',

  styleUrls: [
    '../../../../shared/components/custom-table/custom-table.component.scss',
  ],
  providers: [
    {
      provide: ListTableService,
      useExisting: AdminService,
    },
  ],
})
export class ListComponent
  extends CustomTableComponent<IAdmin>
  implements OnInit
{
  override columns: TableColumn[] = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: IAdmin) => `${element.name}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: IAdmin) => `${element.email}`,
    },
    {
      columnDef: 'phone',
      header: 'Phone',
      cell: (element: IAdmin) => `${element.phone}`,
    },
    {
      columnDef: 'role',
      header: 'Role',
      cell: (element: IAdmin) => `${element.role}`,
    },
    {
      columnDef: 'city',
      header: 'City',
      cell: (element: IAdmin) => `${element.city}`,
    },
    {
      columnDef: 'country',
      header: 'Country',
      cell: (element: IAdmin) => `${element.country}`,
    },
  ];

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.haveActions = true;
    this.hasCreateButton = true;
    this.name = 'Admin';
    this.actionsBtn = [
      TableConsts.actionButton.edit,
      // TableConsts.actionButton.delete,
    ];
    super.ngOnInitC();
  }
}
