import { DatePipe } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { IClient } from '@features/client/models/client';
import { ClientService } from '@features/client/services/client.service';
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
    DatePipe,
    {
      provide: ListTableService,
      useExisting: ClientService,
    },
  ],
})
export class ListComponent
  extends CustomTableComponent<IClient>
  implements OnInit
{
  override columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: (element: IClient) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: IClient) => `${element.name}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: IClient) => `${element.email}`,
    },
    {
      columnDef: 'address',
      header: 'Address',
      cell: (element: IClient) => `${element.address}`,
    },
    {
      columnDef: 'phone',
      header: 'Phone',
      cell: (element: IClient) => `${element.phone}`,
    },
    {
      columnDef: 'creationDate',
      header: 'Creation Date',
      cell: (element: IClient) =>
        this.datePipe.transform(element.creationDate, 'dd/MM/yyyy') as string,
    },
    {
      columnDef: 'is Active',
      header: 'Is Active',
      icon: true,
      cell: (element: IClient) => (element.isActive ? 'active' : 'not_active'),
    },
  ];

  constructor(private injector: Injector, private datePipe: DatePipe) {
    super(injector);
  }

  ngOnInit(): void {
    this.haveActions = true;
    this.hasCreateButton = true;
    this.name = 'Client';
    this.actionsBtn.push(TableConsts.actionButton.view);

    super.ngOnInitC();
  }
}
