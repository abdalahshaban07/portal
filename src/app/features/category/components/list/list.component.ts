import { DatePipe } from '@angular/common';
import { Component, Injector, OnInit, Optional } from '@angular/core';
import { ICategory } from '@features/category/models/category';
import { CategoryService } from '@features/category/services/category.service';
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
      useExisting: CategoryService,
    },
  ],
})
export class ListComponent
  extends CustomTableComponent<ICategory>
  implements OnInit
{
  override columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'ID',
      flex: 7,
      cell: (element: ICategory) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: ICategory) => `${element.name}`,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: ICategory) => element.description || 'description',
    },
    {
      columnDef: 'creationDate',
      header: 'Creation Date',
      type: typeColumn.date,
      cell: (element: ICategory) => `${element.creationDate}`,
    },
    {
      columnDef: 'is Active',
      header: 'Is Active',
      type: typeColumn.icon,
      cell: (element: ICategory) =>
        element.isActive ? 'active' : 'not_active',
    },
  ];

  constructor(private injector: Injector) {
    super(injector);
  }

  _actionsBtn: string[] = [
    TableConsts.actionButton.edit,
    // TableConsts.actionButton.delete,
  ];

  ngOnInit(): void {
    this.haveActions = true;
    this.actionsBtn = this._actionsBtn;
    this.hasCreateButton = true;
    this.name = 'Category';
    super.ngOnInitC();
  }
}
