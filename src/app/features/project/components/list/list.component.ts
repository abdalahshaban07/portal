import { Roles } from './../../../../shared/Enums/roles';
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

  _haveActions: boolean = true;
  @Input() set haveAcionInput(have: boolean) {
    this._haveActions = have;
  }

  _actionsBtn: string[] = [
    (this.authService.hasRole([Roles.Admin]) &&
      TableConsts.actionButton.edit) ||
      '',
    TableConsts.actionButton.view,
  ];

  @Input() set actionBtnInput(actions: string[]) {
    this._actionsBtn = actions;
  }

  ngOnInit(): void {
    this.haveActions = this._haveActions;
    this.actionsBtn = this._actionsBtn;
    this.hasCreateButton = true;
    this.hasSearch = false;
    this.hasName = false;
    this.name = 'Projects';
    this.hasIconAdd = false;
    this.viewRequest = true;
    super.ngOnInitC();
  }
}
