import { ShareObsService } from './../../../../shared/services/share-obs.service';
import { QuesationService } from '@features/question/services/quesation.service';
import { ListTableService } from '@shared/components/custom-table/list-table.service';
import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Injector,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { listQuestionComponent } from '@features/question/components/list/list.component';
import { TableConsts } from '@shared/components/custom-table/consts/table';
import { AppLoaderDirective } from '@shared/directives/app-loader.directive';
import { BreadcrumbService } from 'xng-breadcrumb';
import { CheckErrorsService } from '@features/check-errors/services/check-errors.service';
import { TableColumn, typeColumn } from '@shared/models/tableColumn';
import { IQuestion } from '@features/question/models/question';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',

  styleUrls: ['./list.component.scss'],
  providers: [
    {
      provide: ListTableService,
      useExisting: QuesationService,
    },
  ],
})
export class ListComponent implements OnInit {
  categoryId!: string | number;
  projectId!: string | number;
  componentId!: string;
  constructor(
    private activeRoute: ActivatedRoute,
    public shareObsService: ShareObsService,
    private breadcrumbService: BreadcrumbService,
    private injector: Injector,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getIdFromUrl();
  }

  getIdFromUrl() {
    this.projectId =
      this.shareObsService.projectId ||
      (this.activeRoute.snapshot.queryParamMap.get('projectId') as string);

    this.activeRoute.params.subscribe((params) => {
      this.categoryId = params['id'];
      this.getCurrentCategory();
    });
  }

  getCurrentCategory() {
    if (this.categoryId) {
      this.loadQuestionsComponent();
      let currentCategory = this.shareObsService.getCurrentCategory(
        this.categoryId
      );

      this.breadcrumbService.set('@list', currentCategory);
    }
  }

  @ViewChild(AppLoaderDirective, { static: true, read: ViewContainerRef })
  dynamicChild!: ViewContainerRef;

  columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'ID',
      flex: 7,
      cell: (element: IQuestion) => `${element.id}`,
    },
    // {
    //   columnDef: 'projectId',
    //   header: 'Project',
    //   cell: (element: IQuestion) => `${element.projectId}`,
    // },
    {
      columnDef: 'quesation',
      header: 'Question',
      flex: 30,
      cell: (element: IQuestion) =>
        element.quesation?.length > 45
          ? element.quesation?.substring(0, 45) + '...'
          : element?.quesation || 'question TEMP',
    },
    {
      columnDef: 'description',
      header: 'Description',
      flex: 20,
      cell: (element: IQuestion) =>
        element.description?.length > 30
          ? element.description.substring(0, 30).replace(/<[^>]*>/g, '') + '...'
          : element.description?.replace(/<[^>]*>/g, '') || 'description TEMP',
    },
    {
      columnDef: 'category',
      header: 'Category',
      flex: 12,
      cell: (element: IQuestion) => `${element.category}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      flex: 5,
      cell: (element: IQuestion) => `${element.status}`,
    },
    {
      columnDef: 'clientLastUpdateDate',
      header: 'Client Update',
      type: typeColumn.date,
      flex: 10,
      cell: (element: IQuestion) => `${element?.clientLastUpdateDate || ''}`,
    },
    {
      columnDef: 'consultantLastUpdateDate',
      header: 'Consultant Update',
      type: typeColumn.date,
      flex: 10,
      cell: (element: IQuestion) =>
        `${element?.consultantLastUpdateDate || ''}`,
    },
  ];

  private loadQuestionsComponent() {
    this.dynamicChild.clear();
    const elementInjector = Injector.create({
      providers: [
        {
          provide: QuesationService,
          useExisting: CheckErrorsService,
        },
      ],
      parent: this.injector,
    });
    const questionRef = this.dynamicChild.createComponent(
      listQuestionComponent,
      {
        injector: elementInjector,
      }
    );
    questionRef.instance.id = this.categoryId;
    questionRef.instance.columns = this.columns;
    questionRef.instance.paramsOptions['ProjectId'] = this.projectId;
    questionRef.instance.paramsOptions['CategoryId'] = this.categoryId;
    questionRef.instance.routerName = 'question';
    questionRef.instance.apiToGetListById = 'GetProjectQuesationByCategoryId';
    questionRef.instance.hasIconAdd = false;
    questionRef.instance.hasName = false;
    questionRef.instance.hasSearch = false;
    questionRef.instance.actionBtnInput = [TableConsts.actionButton.details];
    questionRef.instance.detailsRequest = true;

    questionRef.instance.onDetailsClick = (item) => {
      this.router.navigate(
        [`project/view/${item.projectId}/details/${item.id}`],
        {
          queryParams: {
            quesation: item?.quesationId,
          },
        }
      );
    };
  }
}
