import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTotalSummary } from '@features/certificate/models/get-total-summary';
import { CertificateService } from '@features/certificate/services/certificate.service';

interface Info {
  name: string;
  description: string;
  routerLink?: string;
  scroll?: string;
}

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
    }
  }

  getDetails() {
    this.certificateService.get(this.id).subscribe((data) => {
      console.log(data, 'data');
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
        name: 'Questions',
        description: `${data.totalQues} questions`,
        scroll: 'question',
      },
      {
        name: 'Projects',
        description: `${data.totalProjects} projects`,
        scroll: 'project',
      },
      {
        name: 'Clients',
        description: `${data.totalClients} clients`,
        scroll: 'client',
      },
    ];
  }
}
