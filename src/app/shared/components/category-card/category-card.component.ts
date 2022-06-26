import { Component, OnInit } from '@angular/core';

export interface ICategory {
  name: string;
  description: string;
  prcentage: number;
  routerLink: string;
  routeParameter: string;
}

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  categories: ICategory[] = [
    {
      name: 'List Of Documents',
      description: 'List of all documents',
      prcentage: 50,
      routerLink: '/check-errors/view',
      routeParameter: 'documents',
    },
    {
      name: 'List Of Records',
      description: 'List of all records',
      prcentage: 60,
      routerLink: '/check-errors/view',
      routeParameter: 'records',
    },
    {
      name: 'List Of Solutions',
      description: 'List of all solutions',
      prcentage: 70,
      routerLink: '/check-errors/view',
      routeParameter: 'solutions',
    },
    {
      name: 'Configuration Requirements',
      description: 'List of all configuration requirements',
      prcentage: 80,
      routerLink: '/check-errors/view',
      routeParameter: 'configuration',
    },
  ];
  constructor() {}
}