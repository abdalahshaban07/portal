import { SelectionModel } from '@angular/cdk/collections';
import { Component, Injector, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  hasCreateButton: boolean = true;
  hasSearch: boolean = true;
  filterValue!: string;
  width: string = '100%';
  height: string = '100vh';
  name!: string;
  actionsBtn: string[] = [
    TableConsts.actionButton.delete,
    TableConsts.actionButton.edit,
  ];

  id!: number | string;
  routerName!: string;
  apiToGetListById!: string;

  current_page = paginatorForHttp.pageNumber;
  pageSize = paginatorForHttp.pageSize;

  pageEvent = {
    pageNumber: this.current_page,
    pageSize: this.pageSize,
  };

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

    if (this.id) {
      this.hasCreateButton = false;
      this.getItemBy();
    } else {
      this.paginator();
    }
  }

  onTableAction(event: TableButtonAction): void {
    switch (event.name) {
      case 'edit':
        this.onEditClick(event.value);
        break;
      case 'delete':
        this.onDeleteClick(event);
        break;
      case 'view':
        this.onViewClick(event.value);
        break;
      case 'details':
        this.onDetailsClick(event.value);
        break;
    }
  }

  onEditClick(item: any) {
    console.log('edit');

    this.id
      ? this.router.navigate([`${this.routerName}/edit`, item.id])
      : this.router.navigate(['edit/', item.id], { relativeTo: this.route });
  }

  onViewClick(item: any) {
    console.log('view');
    this.id
      ? this.router.navigate([`${this.routerName}/view`, item.id])
      : this.router.navigate(['view/', item.id], { relativeTo: this.route });
  }

  onDetailsClick(item: any) {
    console.log('onDetailsClick');
    this.id
      ? this.router.navigate([`${this.routerName}/details`, item.id], {
          queryParams: {
            quesation: item?.quesationId,
          },
        })
      : null;
  }

  createPage() {
    console.log('create');
    this.id
      ? this.router.navigate([`${this.routerName}/create`])
      : this.router.navigate(['create'], { relativeTo: this.route });
  }

  onDeleteClick(event: TableButtonAction) {
    console.log('delete');
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

  timeout!: any;
  applyFilter(event?: Event) {
    this.filterValue =
      (event && (event?.target as HTMLInputElement).value) || '';
    let self = this;

    clearTimeout(this.timeout);
    this.timeout = setTimeout(function () {
      self.makeSearch();
    }, 700);
  }

  makeSearch() {
    !this.filterValue && !this.id && this.paginator();
    this.id && !this.filterValue && this.getItemBy();
    this.filterValue &&
      this.listTableService
        .search(
          this.filterValue,
          this.pageEvent.pageNumber,
          this.pageEvent.pageSize
        )
        .subscribe(({ data: { totalCount, dataList } }) => {
          this.length = totalCount;
          this.dataSource.data = dataList as [];
        });
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
    this.pageEvent = event;
    if (this.filterValue) {
      this.applyFilter();
    } else if (this.id) {
      this.getItemBy(event.pageNumber, event.pageSize);
    } else {
      this.paginator(event.pageNumber, event.pageSize);
    }
  }

  paginator(current_page = this.current_page, per_page_items = this.pageSize) {
    this.listTableService
      .getList(current_page, per_page_items)
      .subscribe(({ data: { totalCount, dataList } }) => {
        this.length = totalCount;
        this.dataSource.data = dataList as [];
      });
  }

  getItemBy(current_page = this.current_page, per_page_items = this.pageSize) {
    this.listTableService
      .getItemBy(current_page, per_page_items, this.id, this.apiToGetListById)
      .subscribe(({ data: { totalCount, dataList } }) => {
        this.length = totalCount;
        this.dataSource.data = dataList as [];
      });
  }
}
