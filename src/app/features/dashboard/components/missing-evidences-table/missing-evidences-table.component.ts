import { ShareObsService } from './../../../../shared/services/share-obs.service';
import { DatePipe } from '@angular/common';
import {
  Component,
  OnInit,
  Injector,
  Input,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ProjectService } from '@features/project/services/project.service';
import { IQuestion } from '@features/question/models/question';
import { QuesationService } from '@features/question/services/quesation.service';
import { CustomTableComponent } from '@shared/components/custom-table/custom-table.component';
import { ListTableService } from '@shared/components/custom-table/list-table.service';
import { TableColumn, typeColumn } from '@shared/models/tableColumn';
import { TableConsts } from '@shared/components/custom-table/consts/table';

@Component({
  selector: 'app-missing-evidences-table',
  templateUrl:
    '../../../../shared/components/custom-table/custom-table.component.html',

  styleUrls: [
    '../../../../shared/components/custom-table/custom-table.component.scss',
  ],
  providers: [
    {
      provide: ListTableService,
      useExisting: ProjectService,
    },
  ],
})
export class MissingEvidencesTableComponent
  extends CustomTableComponent<IQuestion>
  implements OnInit
{
  public quesationService!: QuesationService;
  constructor(private injector: Injector) {
    super(injector);
    this.quesationService = this.injector.get(QuesationService);
  }

  override columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'ID',
      flex: 7,
      cell: (element: IQuestion) => `${element.id}`,
    },
    {
      columnDef: 'projectId',
      header: 'Project',
      cell: (element: IQuestion) => `${element.projectId}`,
    },
    {
      columnDef: 'quesation',
      header: 'Question',
      cell: (element: IQuestion) =>
        element.quesation?.length > 35
          ? element.quesation?.substring(0, 35) + '...'
          : element?.quesation || 'question TEMP',
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: IQuestion) =>
        element.description?.length > 30
          ? element.description.substring(0, 30).replace(/<[^>]*>/g, '') + '...'
          : element.description?.replace(/<[^>]*>/g, '') || 'description TEMP',
    },
    {
      columnDef: 'category',
      header: 'Category',
      cell: (element: IQuestion) => `${element.category}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: IQuestion) => `${element.status}`,
    },
    {
      columnDef: 'clientLastUpdateDate',
      header: 'Client Update',
      type: typeColumn.date,
      cell: (element: IQuestion) =>
        `${element?.clientLastUpdateDate || '16/Aug/2022'}`,
    },
    {
      columnDef: 'consultantLastUpdateDate',
      header: 'Consultant Update',
      type: typeColumn.date,
      cell: (element: IQuestion) =>
        `${element?.consultantLastUpdateDate || '16/Aug/2022'}`,
    },
  ];

  ngOnInit(): void {
    this.loadData();
  }

  _haveActions: boolean = true;
  @Input() set haveAcionInput(have: boolean) {
    this._haveActions = have;
  }

  _actionsBtn: string[] = [TableConsts.actionButton.details];

  @Input() set actionBtnInput(actions: string[]) {
    this._actionsBtn = actions;
  }

  override onDetailsClick = (item: any) => {
    console.log('onDetailsClick', item);
    this.router.navigate(
      [`project/view/${item.projectId}/details/${item.id}`],
      {
        queryParams: {
          quesation: item?.quesationId,
        },
      }
    );
  };

  loadData(): void {
    this.haveActions = this._haveActions;
    this.actionsBtn = this._actionsBtn;
    this.detailsRequest = true;
    this.routerName = 'question';
    this.apiToGetListById = 'GetUserMisingProjectQues';
    this.hasSearch = false;
    this.hasIconAdd = false;
    this.hasCreateButton = false;
    this.hasName = true;
    this.name = 'Missing Evidences';
    super.ngOnInitC();
  }
}
