import { ShareObsService } from './../../../../shared/services/share-obs.service';
import { QuesationService } from '@features/question/services/quesation.service';
import { ListTableService } from '@shared/components/custom-table/list-table.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listQuestionComponent } from '@features/question/components/list/list.component';
import { TableConsts } from '@shared/components/custom-table/consts/table';
import { AppLoaderDirective } from '@shared/directives/app-loader.directive';

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
    public shareObsService: ShareObsService
  ) {}

  ngOnInit(): void {
    this.getIdFromUrl();
  }

  getIdFromUrl() {
    // debugger
    this.categoryId = this.activeRoute.snapshot.paramMap.get('id') as string;
    this.projectId = this.activeRoute.snapshot.queryParamMap.get(
      'projectId'
    ) as string;
    if (this.categoryId) {
      this.loadQuestionsComponent();
    }
  }

  @ViewChild(AppLoaderDirective, { static: true, read: ViewContainerRef })
  dynamicChild!: ViewContainerRef;

  private loadQuestionsComponent() {
    const questionRef = this.dynamicChild.createComponent(
      listQuestionComponent
    );
    questionRef.instance.id = this.categoryId;
    questionRef.instance.routerName = 'question';
    questionRef.instance.apiToGetListById = 'GetByCategoryId';
    questionRef.instance.hasIconAdd = false;
    questionRef.instance.hasName = false;
    questionRef.instance.hasSearch = false;
    questionRef.instance.actionsBtn.push(TableConsts.actionButton.details);
    // questionRef.instance.actionsBtn.push(TableConsts.actionButton.details);

    // const apiUrl = questionRef.instance.quesationService.APIUrl.split('/');
    // apiUrl.pop();
    // apiUrl.push('Project');
    // questionRef.instance.quesationService.APIUrl = apiUrl.join('/');
  }
}
