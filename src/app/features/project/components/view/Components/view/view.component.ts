import { TableConsts } from '@shared/components/custom-table/consts/table';
import { TableColumn } from '@shared/models/tableColumn';
import { listQuestionComponent } from '@features/question/components/list/list.component';
import { ProjectService } from '@features/project/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
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
import { ShareObsService } from '@shared/services/share-obs.service';

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
    private injector: Injector,
    private shareObsService: ShareObsService,
    private router: Router
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

  traceRunDetails() {
    this.shareObsService.runGetDetails$obs.subscribe(({ data }) => {
      console.log(data, 'runGetDetails $obs');
      this.router.navigate([`details/${data?.id}`], {
        relativeTo: this.activeRoute,
        queryParams: {
          quesation: data.quesation,
        },
      });
    });
  }

  getDetails() {
    this.projectService.get(this.id).subscribe((data: any) => {
      this.projectCode = data.projectCode || 'project Code ';
      this.description = data.description || 'description';
      this.breadcrumbService.set(
        '@View',
        data.certificate + ' - ' + this.projectCode
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
        name: 'Rejected',
        description: `${data?.rejectCout || 0} `,
      },
      {
        name: 'Waiting Review',
        description: `${data?.underReviewCount || 0}`,
      },
      {
        name: 'Accepted',
        description: `${data?.acceptCount || 0}`,
      },
      {
        name: 'New',
        description: `${data?.newCount || 0}`,
      },
    ];
  }

  @ViewChild(AppLoaderDirective, { static: true, read: ViewContainerRef })
  dynamicChild!: ViewContainerRef;

  apiToGetListById = {
    All: 'GetProjectQuesationList',
    New: 'GetProjectNewQuesations',
    Rejected: 'GetProjectRejectedQuesations',
    Accepted: 'GetProjectAcceptedQuesations',
    'Waiting Review': 'GetProjectWaitingRevQuesations',
  };

  loadComponet(componenName?: string) {
    // dont load component if it is already loaded
    if (this.componentId === componenName?.toLowerCase()) {
      return;
    }
    this.dynamicChild.clear();
    switch (componenName) {
      case 'Waiting Review':
        this.componentId = 'Waiting Review';
        this.loadQuestionsComponent(this.apiToGetListById['Waiting Review']);
        break;
      case 'Accepted':
        this.componentId = 'Accepted';
        this.loadQuestionsComponent(this.apiToGetListById.Accepted);
        break;
      case 'Rejected':
        this.componentId = 'Rejected';
        this.loadQuestionsComponent(this.apiToGetListById.Rejected);
        break;
      case 'All':
        this.componentId = 'All';
        this.loadQuestionsComponent(this.apiToGetListById.All);
        break;
      case 'New':
        this.componentId = 'New';
        this.loadQuestionsComponent(this.apiToGetListById.New);
        break;
      default:
        this.loadQuestionsComponent(this.apiToGetListById.Rejected);
        break;
    }
  }

  columns: TableColumn[] = [
    {
      columnDef: 'id',
      header: 'ID',
      flex: 5,
      cell: (element: IQuestion) => `${element.id}`,
    },
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
      flex: 30,
      cell: (element: IQuestion) =>
        element.description?.length > 30
          ? element.description.substring(0, 30).replace(/<[^>]*>/g, '') + '...'
          : element.description?.replace(/<[^>]*>/g, '') || 'description TEMP',
    },
    {
      columnDef: 'category',
      header: 'Category',
      flex: 20,
      cell: (element: IQuestion) => `${element.category}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      flex: 10,
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
    questionRef.instance.paramsOptions['id'] = this.id;
    questionRef.instance.routerName = 'project';
    questionRef.instance.columns = this.columns;
    questionRef.instance.apiToGetListById = apiToGetListById;

    questionRef.instance.hasSearch = false;
    questionRef.instance.detailsRequest = true;

    questionRef.instance.actionBtnInput = [TableConsts.actionButton.details];
  }
}
