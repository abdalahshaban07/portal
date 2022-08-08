import { Component, Injector, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQuestion } from '@features/question/models/question';
import { QuesationService } from '@features/question/services/quesation.service';
import { TableConsts } from '@shared/components/custom-table/consts/table';
import { CustomTableComponent } from '@shared/components/custom-table/custom-table.component';
import { ListTableService } from '@shared/components/custom-table/list-table.service';
import { TableColumn } from '@shared/models/tableColumn';

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
          : element.quesation,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: IQuestion) =>
        element.description.length > 30
          ? element.description.substring(0, 30).replace(/<[^>]*>/g, '') + '...'
          : element.description.replace(/<[^>]*>/g, '') || 'description',
    },
    {
      columnDef: 'category',
      header: 'Category',
      cell: (element: IQuestion) => `${element.category}`,
    },
    {
      columnDef: 'is Active',
      header: 'Is Active',
      icon: true,
      cell: (element: IQuestion) =>
        element.isActive ? 'active' : 'not_active',
    },
  ];

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.haveActions = true;
    this.hasCreateButton = true;
    this.name = 'Quesation';
    this.id ? (this.hasName = true) : false;
    this.actionsBtn.push(TableConsts.actionButton.view);
    super.ngOnInitC();
  }
}
