import { DatePipe } from '@angular/common';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { IProject } from '@features/project/models/project';
import { ProjectService } from '@features/project/services/project.service';
import { TableConsts } from '@shared/components/custom-table/consts/table';
import { CustomTableComponent } from '@shared/components/custom-table/custom-table.component';
import { ListTableService } from '@shared/components/custom-table/list-table.service';
import { TableColumn } from '@shared/models/tableColumn';

@Component({
  selector: 'app-list-project',
  templateUrl:
    '../../../../shared/components/custom-table/custom-table.component.html',

  styleUrls: [
    '../../../../shared/components/custom-table/custom-table.component.scss',
  ],
  providers: [
    DatePipe,
    {
      provide: ListTableService,
      useExisting: ProjectService,
    },
  ],
})
export class ListComponent
  extends CustomTableComponent<IProject>
  implements OnInit
{
  _hasCreateButton: boolean = true;

  @Input() set hasCreateButtonIn(value: boolean) {
    this._hasCreateButton = value;
  }

  _id!: number | string;

  @Input() set idIn(value: number | string) {
    this._id = value;
  }
  override columns: TableColumn[] = [
    {
      columnDef: 'projectCode',
      header: 'Code',
      cell: (element: IProject) => `${element.projectCode || 'code'}`,
    },
    {
      columnDef: 'name',
      header: 'Company',
      cell: (element: IProject) => `${element.client}`,
    },
    {
      columnDef: 'certificate',
      header: 'Certificate',
      cell: (element: IProject) => `${element.certificate}`,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: IProject) => `${element.description}`,
    },
    {
      columnDef: 'quesStatus',
      header: 'Status',
      cell: (element: IProject) => `${element.quesStatus}`,
    },
    {
      columnDef: 'startDate',
      header: 'Start Date',
      cell: (element: IProject) =>
        this.datePipe.transform(element.startDate, 'dd/MM/yyyy') as string,
    },
    {
      columnDef: 'endDate',
      header: 'End Date',
      cell: (element: IProject) =>
        this.datePipe.transform(element.endDate, 'dd/MM/yyyy') as string,
    },
  ];

  constructor(private injector: Injector, private datePipe: DatePipe) {
    super(injector);
  }

  ngOnInit(): void {
    this.haveActions = true;
    this.hasCreateButton = this._hasCreateButton;
    this.id = this._id;
    this.id ? (this.hasName = true) : false;
    this.actionsBtn.push(TableConsts.actionButton.view);
    this.name = 'Project';
    super.ngOnInitC();
  }
}
