import { ComponentType } from '@angular/cdk/portal';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTotalSummary } from '@features/certificate/models/get-total-summary';
import { CertificateService } from '@features/certificate/services/certificate.service';
import { ListProjectComponent } from '@features/project/components/list/list.component';
import { listQuestionComponent } from '@features/question/components/list/list.component';
import { AppLoaderDirective } from '@shared/directives/app-loader.directive';
import { Info } from '@shared/models/infor-card';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  id!: number | string;
  name!: string;
  description!: string;

  info!: Info[];

  componentId!: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private certificateService: CertificateService,
    private scroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.getIdFromUrl();
  }

  scroll(id: string | undefined) {
    this.scroller.scrollToAnchor(id as string);
  }

  getIdFromUrl() {
    this.id = this.activeRoute.snapshot.paramMap.get('id') as string;
    if (this.id) {
      this.getDetails();
      this.getTolalSummaries();
      this.componentId = 'question';
      this.loadComponet();
    }
  }

  getDetails() {
    this.certificateService.get(this.id).subscribe((data) => {
      this.name = data.name;
      this.description = data.description;
    });
  }

  getTolalSummaries() {
    this.certificateService.getTotal(this.id).subscribe((data) => {
      this.prepareInfo(data);
    });
  }

  prepareInfo(data: GetTotalSummary) {
    this.info = [
      {
        name: 'Question',
        description: `${data.totalQues} questions`,
        scroll: 'question',
      },
      {
        name: 'Project',
        description: `${data.totalProjects} projects`,
        scroll: 'project',
      },
      {
        name: 'Client',
        description: `${data.totalClients} clients`,
        scroll: 'client',
      },
    ];
  }

  @ViewChild(AppLoaderDirective, { static: true, read: ViewContainerRef })
  dynamicChild!: ViewContainerRef;

  loadComponet(componenName?: string) {
    // dont load component if it is already loaded
    if (this.componentId === componenName?.toLowerCase()) {
      return;
    }

    this.dynamicChild.clear();
    switch (componenName) {
      case 'Question':
        this.componentId = 'question';
        this.loadQuestionComponent();
        break;
      case 'Project':
        this.componentId = 'project';
        this.loadProjectComponent();
        break;
      default:
        this.loadQuestionComponent();
        break;
    }
  }
  private loadQuestionComponent() {
    const questionRef = this.dynamicChild.createComponent(
      listQuestionComponent
    );
    questionRef.instance.id = this.id;
    questionRef.instance.paramsOptions['id'] = this.id;
    questionRef.instance.routerName = 'question';
    questionRef.instance.apiToGetListById = 'GetListByCertifcate';
  }

  private loadProjectComponent() {
    const projectRef = this.dynamicChild.createComponent(ListProjectComponent);
    projectRef.instance.id = this.id;
    projectRef.instance.paramsOptions['id'] = this.id;
    projectRef.instance.routerName = 'project';
    projectRef.instance.apiToGetListById = 'GetListByCertifcate';
  }
}
