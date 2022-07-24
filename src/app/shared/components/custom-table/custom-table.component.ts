import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatCell, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { paginatorForHttp } from '@shared/configs/paginator';
import { TableButtonAction } from '@shared/models/tableButtonAction';
import { TableColumn } from '@shared/models/tableColumn';
import { finalize } from 'rxjs';
import { TableConsts } from './consts/table';
import { ListTableService } from './list-table.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent<T> {
  ELEMENT_DATA!: any[];
  dataSource = new MatTableDataSource<T>();
  columns!: Array<TableColumn>;
  haveSelect: boolean = false;
  haveActions: boolean = false;
  hasName: boolean = false;
  hasCreateButton: boolean = false;
  hasSearch: boolean = false;
  width: string = '100%';
  height: string = '100vh';
  name!: string;
  actionsBtn: string[] = [
    TableConsts.actionButton.delete,
    TableConsts.actionButton.edit,
  ];

  @ViewChild(MatSort, { static: true }) sort!: MatSort; // sort

  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];
  value!: string;

  length!: number;

  private router!: Router;
  private route!: ActivatedRoute;
  private listTableService!: ListTableService;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.route = injector.get(ActivatedRoute);
    this.listTableService = injector.get(ListTableService);
  }

  ngOnInitC(): void {
    this.haveSelect && this.displayedColumns.push('select');

    this.displayedColumns = this.displayedColumns.concat(
      this.columns.map((x) => x.columnDef)
    );

    this.haveActions && this.displayedColumns.push('action');

    this.dataSource.sort = this.sort;

    this.paginator();
  }

  onTableAction(event: TableButtonAction): void {
    switch (event.name) {
      case 'edit':
        this.onEditClick(event.value);
        break;
      case 'delete':
        this.onDeleteClick(event);
        break;
    }
  }

  onEditClick(item: any) {
    console.log('edit');
    this.router.navigate(['edit/', item.id], { relativeTo: this.route });
  }

  createPage() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  onDeleteClick(event: TableButtonAction) {
    const id = event.value?.id;

    // this.dataSource.data = this.dataSource.data.filter(
    //   (item: any) => item.id !== id
    // );

    this.listTableService
      .delete(id)
      .pipe(finalize(() => this.paginator()))
      .subscribe();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }

  onPageChange(event: { pageNumber: number; pageSize: number }): void {
    this.paginator(event.pageNumber, event.pageSize);
  }

  paginator(
    current_page = paginatorForHttp.pageNumber,
    per_page_items = paginatorForHttp.pageSize
  ) {
    this.listTableService
      .getList(current_page, per_page_items)
      .subscribe(({ data: { totalCount, dataList } }) => {
        this.length = totalCount;
        this.dataSource.data = dataList as [];
      });
  }
}
