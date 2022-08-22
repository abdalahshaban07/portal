import { Component, Injector, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { IQuestion } from '@features/question/models/question';
import { QuesationService } from '@features/question/services/quesation.service';
import { TableConsts } from '@shared/components/custom-table/consts/table';
import { CustomTableComponent } from '@shared/components/custom-table/custom-table.component';
import { ListTableService } from '@shared/components/custom-table/list-table.service';
import { Roles } from '@shared/Enums/roles';
import { TableColumn, typeColumn } from '@shared/models/tableColumn';

@Component({
  selector: 'app-list-question',
  templateUrl:
    '../../../../shared/components/custom-table/custom-table.component.html',

  styleUrls: [
    '../../../../shared/components/custom-table/custom-table.component.scss',
  ],
  providers: [
    {
      provide: ListTableService,
      useExisting: QuesationService,
    },
  ],
})
export class listQuestionComponent
  extends CustomTableComponent<IQuestion>
  implements OnInit
{
  override columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: (element: IQuestion) => `${element.id}`,
    },
    {
      columnDef: 'title',
      header: 'Title',
      cell: (element: IQuestion) =>
        element.quesation.length > 35
          ? element.quesation.substring(0, 35) + '...'
          : element?.quesation,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: IQuestion) =>
        element.description.length > 30
          ? element.description.substring(0, 30).replace(/<[^>]*>/g, '') + '...'
          : element.description?.replace(/<[^>]*>/g, '') || 'description',
    },
    {
      columnDef: 'category',
      header: 'Category',
      cell: (element: IQuestion) => `${element.category}`,
    },
    {
      columnDef: 'is Active',
      header: 'Is Active',
      type: typeColumn.icon,
      cell: (element: IQuestion) =>
        element.isActive ? 'active' : 'not_active',
    },
  ];

  public quesationService!: QuesationService;
  constructor(private injector: Injector) {
    super(injector);
    this.quesationService = this.injector.get(QuesationService);
  }

  override onViewClick(item: any) {
    if (this.actionsBtn.includes(TableConsts.actionButton.details)) {
      this.injector
        .get(Router)
        .navigate([`${this.routerName}/view`, item.quesationId]);
    } else {
      super.onViewClick(item);
    }
  }

  ngOnInit(): void {
    this.haveActions = true;
    this.name = 'Quesation';
    let cond = this.injector.get(AuthService).hasRole([Roles.User]);
    if (cond) {
      // remove view button for user
      let index = this.actionsBtn.indexOf(TableConsts.actionButton.view);
      this.actionsBtn.splice(index, 1);
    } else {
      this.actionsBtn.push(TableConsts.actionButton.view);
    }

    super.ngOnInitC();
  }
}
