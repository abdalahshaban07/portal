import { TableConsts } from '@shared/components/custom-table/consts/table';
import { TableColumn } from '@shared/models/tableColumn';
import { listQuestionComponent } from '@features/question/components/list/list.component';
import { ProjectService } from '@features/project/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Info } from '@shared/models/infor-card';
import {
  Component,
  inject,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { GetTotalSummary } from '@features/project/models/get-total';
import { AppLoaderDirective } from '@shared/directives/app-loader.directive';
import { IQuestion } from '@features/question/models/question';
import { BreadcrumbService } from 'xng-breadcrumb';
import { QuesationService } from '@features/question/services/quesation.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  id!: number | string;
  projectCode!: string;
  description!: string;

  info!: Info[];
  componentId!: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private projectService: ProjectService,
    private breadcrumbService: BreadcrumbService,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this.getIdFromUrl();
  }

  getIdFromUrl() {
    this.id = this.activeRoute.snapshot.paramMap.get('id') as string;
    if (this.id) {
      this.getDetails();
      this.getTolalSummaries();
      this.componentId = 'all';
      this.loadComponet();
    }
  }

  getDetails() {
    this.projectService.get(this.id).subscribe((data) => {
      this.projectCode = data.projectCode;
      this.description = data.description;
      this.breadcrumbService.set(
        '@View',
        data.certificate + ' - ' + data.projectCode
      );
    });
  }

  getTolalSummaries() {
    this.projectService.getTotal(this.id).subscribe((data) => {
      this.prepareInfo(data);
    });
  }

  prepareInfo(data?: GetTotalSummary) {
    this.info = [
      {
        name: 'rejected',
        description: `${data?.rejectCout || 0} `,
      },
      {
        name: 'waitingReview',
        description: `${data?.underReviewCount || 0}`,
      },
      {
        name: 'accepted',
        description: `${data?.acceptCount || 0}`,
      },
      {
        name: 'new',
        description: `${data?.newCount || 0}`,
      },
    ];
  }

  @ViewChild(AppLoaderDirective, { static: true, read: ViewContainerRef })
  dynamicChild!: ViewContainerRef;

  apiToGetListById = {
    all: 'GetProjectQuesationList',
    new: 'GetProjectNewQuesations',
    rejected: 'GetProjectRejectedQuesations',
    accepted: 'GetProjectAcceptedQuesations',
    waitingReview: 'GetProjectWaitingRevQuesations',
  };

  loadComponet(componenName?: string) {
    // dont load component if it is already loaded
    if (this.componentId === componenName?.toLowerCase()) {
      return;
    }
    this.dynamicChild.clear();
    switch (componenName) {
      case 'waitingReview':
        this.componentId = 'waitingReview';
        this.loadQuestionsComponent(this.apiToGetListById.waitingReview);
        break;
      case 'accepted':
        this.componentId = 'accepted';
        this.loadQuestionsComponent(this.apiToGetListById.accepted);
        break;
      case 'rejected':
        this.componentId = 'rejected';
        this.loadQuestionsComponent(this.apiToGetListById.rejected);
        break;
      case 'all':
        this.componentId = 'all';
        this.loadQuestionsComponent(this.apiToGetListById.all);
        break;
      case 'new':
        this.componentId = 'new';
        this.loadQuestionsComponent(this.apiToGetListById.new);
        break;
      default:
        this.loadQuestionsComponent(this.apiToGetListById.rejected);
        break;
    }
  }

  columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: (element: IQuestion) => `${element.id}`,
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
  ];

  private loadQuestionsComponent(apiToGetListById: string) {
    const elementInjector = Injector.create({
      providers: [
        {
          provide: QuesationService,
          useExisting: ProjectService,
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
    questionRef.instance.id = this.id;
    questionRef.instance.routerName = 'project';
    questionRef.instance.columns = this.columns;
    questionRef.instance.apiToGetListById = apiToGetListById;
    questionRef.instance.actionsBtn.push(TableConsts.actionButton.details);
    questionRef.instance.hasSearch = false;
    questionRef.instance.rowClicked = true;
  }
}
