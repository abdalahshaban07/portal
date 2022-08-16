import { ShareObsService } from './../../services/share-obs.service';
import { QuesationService } from '@features/question/services/quesation.service';
import { ProjectService } from '@features/project/services/project.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IProjectPercentage,
  PerCentage,
} from '@features/project/models/projectPercentage';

export interface ICategoryCard {
  id: number;
  name: string;
  description?: string;
  prcentage: string;
  routerLink: string;
}

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  _id!: number | string;
  @Input() set id(id: number | string) {
    this._id = id;
    this.getCategoryByProjectId();
  }

  categories!: ICategoryCard[];
  constructor(
    private activeRoute: ActivatedRoute,
    private projectService: ProjectService,
    private quesationService: QuesationService,
    private router: Router,
    private shareObsService: ShareObsService
  ) {}

  ngOnInit(): void {
    this.getIdFromUrl();
  }

  getIdFromUrl() {
    if (!this._id) {
      this._id = this.activeRoute.snapshot.paramMap.get('id') as string;
      this.getCategoryByProjectId();
    }
  }

  getCategoryByProjectId() {
    this.projectService
      .getCategoryWithPercentageByProjectId(this._id)
      .subscribe(({ data }) => {
        data && this.prepareCategoryCard(data);
      });
  }

  prepareCategoryCard(data: IProjectPercentage) {
    this.categories = data.projectPercentage?.map((item) => {
      return {
        id: item.id,
        name: item.category,
        prcentage: item.completed,
        routerLink: `/check-errors/list/${item.id}`,
      };
    });
  }

  continue(category: ICategoryCard) {
    this.router.navigate(['/check-errors/list', category.id], {
      queryParams: {
        projectId: this.shareObsService.projectId,
      },
    });
    const apiUrl = this.quesationService.APIUrl.split('/');
    apiUrl.pop();
    apiUrl.push('Quesation');
    this.quesationService.APIUrl = apiUrl.join('/');
  }
}
