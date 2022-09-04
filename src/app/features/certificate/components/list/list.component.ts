import { Component, Injector, Input, OnInit } from '@angular/core';
import { ICertificate } from '@features/certificate/models/certificate.model';
import { CertificateService } from '@features/certificate/services/certificate.service';
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
      useExisting: CertificateService,
    },
  ],
})
export class ListCertificateComponent
  extends CustomTableComponent<ICertificate>
  implements OnInit
{
  override columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'ID',
      flex: 10,
      cell: (element: ICertificate) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      flex: 30,
      cell: (element: ICertificate) =>
        element.name.length > 40
          ? `${element.name.substring(0, 40)}...`
          : `${element.name}`,
    },
    {
      columnDef: 'description',
      header: 'Description',
      flex: 40,
      cell: (element: ICertificate) =>
        element.description.length > 50
          ? `${element.description.substring(0, 50)}...`
          : `${element.description || 'No description'}`,
    },
    {
      columnDef: 'is Active',
      header: 'Is Active',
      type: typeColumn.icon,
      flex: 10,
      cell: (element: ICertificate) =>
        element.isActive ? 'active' : 'not_active',
    },
  ];

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.haveActions = true;
    this.name = 'Certificate';
    this.id ? (this.hasName = true) : false;
    this.actionsBtn.push(TableConsts.actionButton.view);
    this.viewRequest = true;
    super.ngOnInitC();
  }
}
