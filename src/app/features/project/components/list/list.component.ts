import { DatePipe } from '@angular/common';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { IProject } from '@features/project/models/project';
import { ProjectService } from '@features/project/services/project.service';
import { TableConsts } from '@shared/components/custom-table/consts/table';
import { CustomTableComponent } from '@shared/components/custom-table/custom-table.component';
import { ListTableService } from '@shared/components/custom-table/list-table.service';
import { TableColumn, typeColumn } from '@shared/models/tableColumn';

@Component({
  selector: 'app-list-project',
  templateUrl:
    '../../../../shared/components/custom-table/custom-table.component.html',

  styleUrls: [
    '../../../../shared/components/custom-table/custom-table.component.scss',
  ],
  providers: [
    {
      provide: ListTableService,
      useExisting: ProjectService,
    },
  ],
})
export class ListProjectComponent
  extends CustomTableComponent<IProject>
  implements OnInit
{
  override columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'Id',
      flex: 7,
      cell: (element: IProject) => `${element.id}`,
    },
    {
      columnDef: 'projectCode',
      header: 'Code',
      flex: 10,
      cell: (element: IProject) => `${element.projectCode || 'code'}`,
    },
    {
      columnDef: 'name',
      header: 'Company',
      flex: 10,
      cell: (element: IProject) => `${element.client}`,
    },
    {
      columnDef: 'certificate',
      header: 'Certificate',
      flex: 10,
      cell: (element: IProject) => `${element.certificate}`,
    },
    {
      columnDef: 'description',
      header: 'Description',
      flex: 15,
      cell: (element: IProject) => `${element.description}`,
    },
    {
      columnDef: 'quesStatus',
      header: 'Status',
      flex: 10,
      cell: (element: IProject) => `${element.quesStatus}`,
    },
    {
      columnDef: 'startDate',
      header: 'Start Date',
      type: typeColumn.date,
      flex: 15,
      cell: (element: IProject) => `${element.startDate}`,
    },
    {
      columnDef: 'endDate',
      header: 'End Date',
      type: typeColumn.date,
      flex: 15,
      cell: (element: IProject) => `${element.endDate}`,
    },
  ];

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.haveActions = true;
    this.hasCreateButton = true;
    this.hasSearch = false;
    this.actionsBtn.push(TableConsts.actionButton.view);
    this.hasName = true;
    this.name = 'Projects';

    super.ngOnInitC();
  }
}
