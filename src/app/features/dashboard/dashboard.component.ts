import { Component, OnInit } from '@angular/core';
import { Roles } from '@shared/Enums/roles';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Roles = Roles;
  constructor() {}

  ngOnInit(): void {}
}
