import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableButtonAction } from '@shared/models/tableButtonAction';
import { TableConsts } from '../custom-table/consts/table';

@Component({
  selector: '[action-buttons]',
  // selector: 'action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
})
export class ActionButtonsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() value!: string;
  @Output() buttonAction: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();

  @Input() actions!: string[];

  onEditClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.edit,
      value: this.value,
    });
  }
  onDeleteClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.delete,
      value: this.value,
    });
  }
  onViewClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.view,
      value: this.value,
    });
  }
}
