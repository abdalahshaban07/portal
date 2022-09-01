import { AnswerService } from '../../../../../question/services/answer.service';
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
    '../../../../../../shared/components/custom-table/custom-table.component.html',

  styleUrls: [
    '../../../../../../shared/components/custom-table/custom-table.component.scss',
  ],
  providers: [
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
    this.paramsOptions['id'] = id;
  }

  @Input() inputId!: number | string;

  override columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: (element: IAnswerDocs) => `${element.id}`,
    },
    // {
    //   columnDef: 'projectId',
    //   header: 'Project ID',
    //   cell: (element: IAnswerDocs) => `${element.projectId}`,
    // },
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

    {
      columnDef: 'imagePath',
      header: 'File Path',
      type: typeColumn.fileArray,
      cell: (element: IAnswerDocs) =>
        element.imagePath.map((file) => file).flatMap((file) => file),
    },
    {
      columnDef: 'documentName',
      header: 'Document Name',
      cell: (element: IAnswerDocs) =>
        element.documentName.map(
          (doc: string) =>
            `[${doc.split('.')[0].substring(30) + '.' + doc.split('.')[1]}]` +
            '\n'
        ),
    },
  ];

  constructor(private injector: Injector) {
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
