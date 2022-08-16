import { AnswerService } from './../../services/answer.service';
import { CustomTableComponent } from '@shared/components/custom-table/custom-table.component';
import { QuesationService } from '@features/question/services/quesation.service';
import { ListTableService } from '@shared/components/custom-table/list-table.service';
import { DatePipe } from '@angular/common';
import { TableColumn, typeColumn } from '@shared/models/tableColumn';
import { Component, Input, OnInit, Injector } from '@angular/core';
import { IAnswerDocs } from '@features/question/models/comment';

@Component({
  selector: 'app-acceptance-history',
  templateUrl:
    '../../../../shared/components/custom-table/custom-table.component.html',

  styleUrls: [
    '../../../../shared/components/custom-table/custom-table.component.scss',
  ],
  providers: [
    DatePipe,
    {
      provide: ListTableService,
      useExisting: AnswerService,
    },
  ],
})
export class AcceptanceHistoryComponent
  extends CustomTableComponent<IAnswerDocs>
  implements OnInit
{
  public quesationService!: QuesationService;
  @Input() set historyId(id: number | string) {
    this.id = id;
  }

  override columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: (element: IAnswerDocs) => `${element.id}`,
    },
    {
      columnDef: 'answer',
      header: 'Answer',
      cell: (element: IAnswerDocs) => `${element.answer}`,
    },
    {
      columnDef: 'clientUserCreateBy',
      header: 'User',
      cell: (element: IAnswerDocs) => `${element.clientUserCreateBy || ''}`,
    },
    {
      columnDef: 'consultentCreateBy',
      header: 'Consultent',
      cell: (element: IAnswerDocs) => `${element.consultentCreateBy || ''}`,
    },
    // {
    //   columnDef: 'quesationId',
    //   header: 'Quesation ID',
    //   cell: (element: IAnswerDocs) => `${element.quesationId}`,
    // },
    {
      columnDef: 'uploadDate',
      header: 'Upload Date',
      cell: (element: IAnswerDocs) =>
        this.datePipe.transform(element.uploadDate, 'dd/MMM/yyyy') as string,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: IAnswerDocs) =>
        `${element.description || 'No description'}`,
    },
    {
      columnDef: 'imagePath',
      header: 'File Path',
      type: typeColumn.file,
      cell: (element: IAnswerDocs) => `${element.imagePath}`,
    },
    {
      columnDef: 'documentName',
      header: 'Document Name',
      cell: (element: IAnswerDocs) =>
        `${
          element.documentName.split('.')[0].substring(30) +
          '.' +
          element.documentName.split('.')[1]
        }`,
    },
  ];

  constructor(private injector: Injector, private datePipe: DatePipe) {
    super(injector);
    this.quesationService = this.injector.get(QuesationService);
  }

  ngOnInit(): void {
    this.haveActions = false;
    this.hasSearch = false;
    this.apiToGetListById = 'GetAllAnswersAndDocsByLineId';
    super.ngOnInitC();
  }
}
