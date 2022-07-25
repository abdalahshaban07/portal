import { DatePipe } from '@angular/common';
import { Component, Injector, OnInit, Optional } from '@angular/core';
import { ICategory } from '@features/category/models/category';
import { CategoryService } from '@features/category/services/category.service';
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
    DatePipe,
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
      cell: (element: ICategory) =>
        this.datePipe.transform(element.creationDate, 'dd/MM/yyyy') as string,
    },
    {
      columnDef: 'is Active',
      header: 'Is Active',
      icon: true,
      cell: (element: ICategory) =>
        element.isActive ? 'active' : 'not_active',
    },
  ];

  constructor(private injector: Injector, private datePipe: DatePipe) {
    super(injector);
  }

  override actionsBtn = [
    TableConsts.actionButton.delete,
    TableConsts.actionButton.edit,
  ];
  ngOnInit(): void {
    this.haveActions = true;
    this.hasCreateButton = true;
    this.name = 'Category';
    super.ngOnInitC();
  }
}
