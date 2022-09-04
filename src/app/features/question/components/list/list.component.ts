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
      flex: 7,
      cell: (element: IQuestion) => `${element.id}`,
    },
    {
      columnDef: 'title',
      header: 'Title',
      flex: 35,
      cell: (element: IQuestion) =>
        element.quesation.length > 45
          ? element.quesation.substring(0, 45) + '...'
          : element?.quesation,
    },
    {
      columnDef: 'description',
      header: 'Description',
      flex: 30,
      cell: (element: IQuestion) =>
        element.description.length > 30
          ? element.description.substring(0, 30).replace(/<[^>]*>/g, '') + '...'
          : element.description?.replace(/<[^>]*>/g, '') || 'description',
    },
    {
      columnDef: 'category',
      header: 'Category',
      flex: 15,
      cell: (element: IQuestion) => `${element.category}`,
    },
    {
      columnDef: 'is Active',
      header: 'Is Active',
      flex: 10,
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
    let cond = this.injector
      .get(AuthService)
      .hasRole([Roles.User, Roles.Editor]);
    if (!cond) {
      this.actionsBtn.push(TableConsts.actionButton.view);
    } else {
      // // remove view button for user
      // let index = this.actionsBtn.indexOf(TableConsts.actionButton.view);
      // this.actionsBtn.splice(index, 1);
    }

    this.viewRequest = true;

    super.ngOnInitC();
  }
}
