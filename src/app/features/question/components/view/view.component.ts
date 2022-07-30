import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuesationService } from '@features/question/services/quesation.service';
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
    this.getIdFromUrl();
  }

  getIdFromUrl() {
    this.id = this.activeRoute.snapshot.paramMap.get('id') as string;
    if (this.id) {
      this.getDetails();
    }
  }

  getDetails() {
    this.quesationService.get(this.id).subscribe((data) => {
      console.log(data, 'data');
      this.name = data.quesation;
      this.description = data.description;
    });
  }
}
