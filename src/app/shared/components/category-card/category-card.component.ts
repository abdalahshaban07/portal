import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface ICategoryCard {
  name: string;
  description: string;
  prcentage: number;
  routerLink: string;
}

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  categories: ICategoryCard[] = [
    {
      name: 'List Of Documents',
      description: 'List of all documents',
      prcentage: 50,
      routerLink: 'check-errors/list/documents',
    },
    {
      name: 'List Of Records',
      description: 'List of all records',
      prcentage: 60,
      routerLink: 'check-errors/list/records',
    },
    {
      name: 'List Of Solutions',
      description: 'List of all solutions',
      prcentage: 70,
      routerLink: 'check-errors/list/solutions',
    },
    {
      name: 'Configuration Requirements',
      description: 'List of all configuration requirements',
      prcentage: 80,
      routerLink: 'check-errors/list/configuration',
    },
  ];
  constructor(private activeRoute: ActivatedRoute) {
    console.log(activeRoute.url);
  }
}
