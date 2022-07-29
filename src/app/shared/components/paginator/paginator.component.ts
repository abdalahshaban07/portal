import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { paginatorForHttp } from '@shared/configs/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit, AfterViewChecked {
  @Input() length!: number;
  pageSize = paginatorForHttp.pageSize;
  pageIndex: number = 0;
  totalPage!: number;
  pageSizeOptions: number[] = paginatorForHttp.pageSizeOptions;
  pageNumber: number = paginatorForHttp.pageNumber;

  @Output() pagenatior = new EventEmitter();

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.changePagenatiorString();
  }

  changePagenatiorString() {
    const list = document.getElementsByClassName('mat-paginator-range-label');
    this.totalPage = Math.ceil(this.length / this.pageSize);

    // this.totalPage > 1 &&
    //   (list[0].innerHTML = `Page: ${this.pageNumber.toString()} --> ${this.totalPage.toString()}`);

    this.cd.detectChanges();
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.pageNumber = this.pageIndex + 1;
    this.pagenatior.emit({
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
    });
  }
}
