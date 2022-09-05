import { Roles } from '@shared/Enums/roles';
import { AdminService } from '@features/admin/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { CardCount } from '@features/dashboard/models/card-count';
import { GetTotalSummary } from '@features/dashboard/models/get-total';

@Component({
  selector: 'app-joined-count',
  templateUrl: './joined-count.component.html',
  styleUrls: ['./joined-count.component.scss'],
})
export class JoinedCountComponent implements OnInit {
  cards!: CardCount[];
  Roles = Roles;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getTolalSummaries();
  }

  getTolalSummaries() {
    this.adminService.getTotal().subscribe((data) => {
      this.prepareInfo(data);
    });
  }

  prepareInfo(data: GetTotalSummary) {
    this.cards = [
      // {
      //   title: 'CLient Count',
      //   count: data.clientCount,
      //   img: 'assets/images/user-count.png',
      //   icon: 'list',
      //   iconRouter: '/client',
      //   role: [Roles.Admin],
      // },
      {
        title: 'Project Count',
        count: data.projectCount,
        img: 'assets/images/certificate.png',
        icon: 'list',
        iconRouter: '/project',
        role: [Roles.Editor, Roles.Admin],
      },
      // {
      //   title: 'user online test',
      //   count: 70,
      //   img: 'assets/images/users.png',
      //   icon: 'list',
      // },
    ];
  }
}
