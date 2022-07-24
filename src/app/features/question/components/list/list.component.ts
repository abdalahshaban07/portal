import { Component, Injector, OnInit } from '@angular/core';
import { IQuestion } from '@features/question/models/question';
import { QuesationService } from '@features/question/services/quesation.service';
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
      useExisting: QuesationService,
    },
  ],
})
export class ListComponent
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
        element.quesation1.length > 35
          ? element.quesation1.substring(0, 35) + '...'
          : element.quesation1,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: IQuestion) =>
        element.description.length > 35
          ? element.description.substring(0, 35) + '...'
          : element.description || 'description',
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

  override actionsBtn = [
    TableConsts.actionButton.delete,
    TableConsts.actionButton.edit,
  ];
  ngOnInit(): void {
    this.haveActions = true;
    this.hasCreateButton = true;
    this.name = 'Quesation';
    super.ngOnInitC();
  }
}
