import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListCertificateComponent } from '@features/certificate/components/list/list.component';
import { QuesationService } from '@features/question/services/quesation.service';
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

  constructor(
    private activeRoute: ActivatedRoute,
    private quesationService: QuesationService
  ) {}

  ngOnInit(): void {
    // debugger;
    this.getIdFromUrl();
  }

  getIdFromUrl() {
    const apiUrl = this.quesationService.APIUrl.split('/');
    apiUrl.pop();
    apiUrl.push('Quesation');
    this.quesationService.APIUrl = apiUrl.join('/');
    this.id = this.activeRoute.snapshot.paramMap.get('id') as string;
    if (this.id) {
      this.getDetails();
      this.loadCerticateComponent();
    }
  }

  getDetails() {
    this.quesationService.get(this.id).subscribe((data) => {
      this.name = data.quesation;
      this.description = data.description;
    });
  }

  @ViewChild(AppLoaderDirective, { static: true, read: ViewContainerRef })
  dynamicChild!: ViewContainerRef;

  private loadCerticateComponent() {
    const certificateRef = this.dynamicChild.createComponent(
      ListCertificateComponent
    );
    certificateRef.instance.id = this.id;
    certificateRef.instance.routerName = 'certificate';
    certificateRef.instance.apiToGetListById = 'GetListByQuesation';
  }
}
