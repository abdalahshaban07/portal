import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListClientUserComponent } from '@features/client-user/components/list/list.component';
import { GetTotalSummary } from '@features/client/models/get.total';
import { ClientService } from '@features/client/services/client.service';
import { ListProjectComponent } from '@features/project/components/list/list.component';
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
  address!: string;

  info!: Info[];
  componentId!: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private clientService: ClientService,
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
      this.componentId = 'user';
      this.loadComponet();
    }
  }

  getDetails() {
    this.clientService.get(this.id).subscribe((data) => {
      console.log(data, 'data');
      this.name = data.name;
      this.address = data.address;
    });
  }

  getTolalSummaries() {
    this.clientService.getTotal(this.id).subscribe((data) => {
      this.prepareInfo(data);
    });
  }

  prepareInfo(data: GetTotalSummary) {
    this.info = [
      {
        name: 'User',
        description: `${data.totalClientUsers} users`,
        scroll: 'users',
      },
      {
        name: 'Project',
        description: `${data.totalProjects} projects`,
        scroll: 'projects',
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
      case 'User':
        this.componentId = 'user';
        this.loadClientUserComponent();
        break;
      case 'Project':
        this.componentId = 'project';
        this.loadProjectComponent();
        break;
      default:
        this.loadClientUserComponent();
        break;
    }
  }

  private loadClientUserComponent() {
    const questionRef = this.dynamicChild.createComponent(
      ListClientUserComponent
    );
    questionRef.instance.id = this.id;
    questionRef.instance.routerName = 'client-user';
    questionRef.instance.apiToGetListById = 'GetListByClient';
  }

  private loadProjectComponent() {
    const projectRef = this.dynamicChild.createComponent(ListProjectComponent);
    projectRef.instance.id = this.id;
    projectRef.instance.routerName = 'project';
    projectRef.instance.apiToGetListById = 'GetListByClient';
  }
}
