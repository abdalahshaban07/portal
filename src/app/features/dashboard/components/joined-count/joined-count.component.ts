import { Component, OnInit } from '@angular/core';
import { CardCount } from '@features/dashboard/models/card-count';

@Component({
  selector: 'app-joined-count',
  templateUrl: './joined-count.component.html',
  styleUrls: ['./joined-count.component.scss'],
})
export class JoinedCountComponent implements OnInit {
  cards: CardCount[] = [
    {
      title: 'Joined Clients',
      count: 234,
      img: 'assets/images/user-count.png',
      icon: 'list',
      iconRouter: '/client',
    },
    {
      title: 'certificate Obtained',
      count: 456,
      img: 'assets/images/certificate.png',
      icon: 'list',
      iconRouter: '/certificate',
    },
    {
      title: 'user online',
      count: 789,
      img: 'assets/images/users.png',
      icon: 'list',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
