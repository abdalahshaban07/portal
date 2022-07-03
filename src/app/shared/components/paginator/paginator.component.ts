import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() length!: number;
  pageSize = 5;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 15];
  pageEvent!: PageEvent;
  pageNumber: number = 1;

  @Output() pagenatior = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onPageChange(event: PageEvent) {
    this.pageEvent = event;
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.pageNumber = this.pageIndex + 1;

    this.pagenatior.emit({
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
    });
  }
}
