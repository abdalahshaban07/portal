import { Component, Injector, OnInit } from '@angular/core';
import { ICertificate } from '@features/certificate/models/certificate.model';
import { CertificateService } from '@features/certificate/services/certificate.service';
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
      useExisting: CertificateService,
    },
  ],
})
export class ListComponent
  extends CustomTableComponent<ICertificate>
  implements OnInit
{
  override columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: (element: ICertificate) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: ICertificate) => `${element.name}`,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: ICertificate) => element.description || 'description',
    },
    {
      columnDef: 'is Active',
      header: 'Is Active',
      icon: true,
      cell: (element: ICertificate) =>
        element.isActive ? 'active' : 'not_active',
    },
  ];

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.haveActions = true;
    this.hasCreateButton = true;
    this.name = 'Certificate';
    super.ngOnInitC();
  }
}
