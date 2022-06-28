import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableButtonAction } from '@shared/models/tableButtonAction';
import { TableColumn } from '@shared/models/tableColumn';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @Input() type!: string;
  @Output() action: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();
  @Input() columns!: Array<TableColumn>;
  @Input() dataSource!: MatTableDataSource<any>;
  @Input() haveSelect!: boolean;
  @Input() haveActions: boolean = false;
  @Input() hasName: boolean = false;
  @Input() hasSearch: boolean = false;
  @Input() width: string = '100%';
  @Input() name!: string;
  @Input() actions!: string[];

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];
  value!: string;

  constructor() {}

  ngOnInit(): void {
    // set checkbox column
    this.haveSelect && this.displayedColumns.push('select');

    // set table columns
    this.displayedColumns = this.displayedColumns.concat(
      this.columns.map((x) => x.columnDef)
    ); // pre-fix static

    // add action column
    this.haveActions && this.displayedColumns.push('action');
    // this.dataSource = new MatTableDataSource<any>(this.dataset);

    // set pagination
    this.dataSource.paginator = this.paginator;

    // set sorting
    this.dataSource.sort = this.sort;
  }

  onTableAction(e: TableButtonAction, element: any): void {
    e = { ...e, value: element };
    this.action.emit(e);
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
}
