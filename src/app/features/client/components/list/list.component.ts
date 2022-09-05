import { DatePipe } from '@angular/common';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { IClient } from '@features/client/models/client';
import { ClientService } from '@features/client/services/client.service';
import { TableConsts } from '@shared/components/custom-table/consts/table';
import { CustomTableComponent } from '@shared/components/custom-table/custom-table.component';
import { ListTableService } from '@shared/components/custom-table/list-table.service';
import { TableColumn, typeColumn } from '@shared/models/tableColumn';

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
      useExisting: ClientService,
    },
  ],
})
export class ListClientComponent
  extends CustomTableComponent<IClient>
  implements OnInit
{
  override columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'ID',
      flex: 7,
      cell: (element: IClient) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      flex: 15,
      cell: (element: IClient) => `${element.name}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      flex: 20,
      cell: (element: IClient) => `${element.email}`,
    },
    {
      columnDef: 'address',
      header: 'Address',
      flex: 15,
      cell: (element: IClient) => `${element.address}`,
    },
    {
      columnDef: 'phone',
      header: 'Phone',
      flex: 10,
      cell: (element: IClient) => `${element.phone}`,
    },
    {
      columnDef: 'creationDate',
      header: 'Creation Date',
      type: typeColumn.date,
      flex: 15,
      cell: (element: IClient) => `${element.creationDate || ''}`,
    },
    {
      columnDef: 'is Active',
      header: 'Is Active',
      type: typeColumn.icon,
      flex: 10,
      cell: (element: IClient) => (element.isActive ? 'active' : 'not_active'),
    },
  ];

  constructor(private injector: Injector) {
    super(injector);
  }

  _haveActions: boolean = true;
  @Input() set haveAcionInput(have: boolean) {
    this._haveActions = have;
  }

  _actionsBtn: string[] = [
    TableConsts.actionButton.edit,
    TableConsts.actionButton.view,
  ];

  @Input() set actionBtnInput(actions: string[]) {
    this._actionsBtn = actions;
  }

  ngOnInit(): void {
    this.haveActions = this._haveActions;
    this.hasCreateButton = true;
    this.name = 'Client';
    this.viewRequest = true;
    this.actionsBtn = this._actionsBtn;
    super.ngOnInitC();
  }
}
