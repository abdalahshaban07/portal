import { Component, Injector, OnInit } from '@angular/core';
import { CustomerService } from '@features/customer/services/customer.service';
import { CustomTableComponent } from '@shared/components/custom-table/custom-table.component';
import { ListTableService } from '@shared/components/custom-table/list-table.service';
import { PeriodicElement } from '../../models/periodic_element';

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
      useExisting: CustomerService,
    },
  ],
})
export class ListComponent
  extends CustomTableComponent<PeriodicElement>
  implements OnInit
{
  constructor(private injector: Injector) {
    super(injector);
  }

  override columns = [
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

  ngOnInit(): void {
    this.haveActions = true;
    this.hasCreateButton = true;
    this.name = 'Customers';
    super.ngOnInitC();
  }
}
