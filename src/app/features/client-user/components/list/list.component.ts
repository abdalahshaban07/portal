import { Component, Injector, OnInit } from '@angular/core';
import { IClientUser } from '@features/client-user/models/client-user';
import { ClientUserService } from '@features/client-user/services/client-user.service';
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
      useExisting: ClientUserService,
    },
  ],
})
export class ListClientUserComponent
  extends CustomTableComponent<IClientUser>
  implements OnInit
{
  override columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'ID',
      flex: 7,
      cell: (element: IClientUser) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      flex: 15,
      cell: (element: IClientUser) => `${element.name}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      flex: 20,
      cell: (element: IClientUser) => `${element.email}`,
    },
    {
      columnDef: 'phone',
      header: 'Phone',
      flex: 15,
      cell: (element: IClientUser) => `${element.phone}`,
    },
    {
      columnDef: 'city',
      header: 'City',
      flex: 10,
      cell: (element: IClientUser) => `${element.city}`,
    },
    {
      columnDef: 'company',
      header: 'Company',
      flex: 15,
      cell: (element: IClientUser) => `${element.client}`,
    },
    {
      columnDef: 'country',
      header: 'Country',
      flex: 10,
      cell: (element: IClientUser) => `${element.country}`,
    },
  ];

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.haveActions = true;
    this.hasCreateButton = true;
    this.name = 'Client User';
    this.id ? (this.hasName = true) : false;
    let index = this.actionsBtn.indexOf(TableConsts.actionButton.view);
    this.actionsBtn.splice(index, 1);
    super.ngOnInitC();
  }
}
