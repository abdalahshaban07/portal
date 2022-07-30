import { Component, Injector, Input, OnInit, Type } from '@angular/core';
import { TableColumn } from '@shared/models/tableColumn';
import { CustomTableComponent } from '../custom-table/custom-table.component';

@Component({
  selector: 'app-list-table',
  templateUrl: '../custom-table/custom-table.component.html',
  styleUrls: ['../custom-table/custom-table.component.scss'],
})
export class ListTableComponent
  extends CustomTableComponent<any>
  implements OnInit
{
  @Input() override haveActions!: boolean;
  @Input() override columns!: Array<TableColumn>;
  @Input() override hasCreateButton!: boolean;
  @Input() override name!: string;
  @Input() override hasName!: boolean;
  @Input() set actionsBtns(value: string[]) {
    this.actionsBtn = [...this.actionsBtn, ...value];
  }
  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    super.ngOnInitC();
  }
}
