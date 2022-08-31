import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICategoryCard } from '@shared/components/category-card/category-card.component';
import { selectMenuOptions } from '@shared/components/dynamic-form-field/dynamic-form-field.model';

@Injectable({
  providedIn: 'root',
})
export class ShareObsService {
  private readonly projectId$ = new BehaviorSubject<number>(
    this.getProjectId() as number
  );

  private readonly category$ = new BehaviorSubject<ICategoryCard[]>(
    this.getCategories() as ICategoryCard[]
  );

  private readonly projects$ = new BehaviorSubject<selectMenuOptions[]>(
    this.getProjects() as selectMenuOptions[]
  );

  private readonly runGetDetails$ = new BehaviorSubject<{
    run: boolean;
    data: any | null;
  }>({ run: false, data: {} });

  public runGetDetails$obs = this.runGetDetails$.asObservable();

  public project$obs = this.projectId$.asObservable();
  constructor() {}

  get projectId(): number {
    return this.projectId$.getValue();
  }

  getProjectId(): number | null {
    return localStorage.getItem('projectId') as number | null;
  }

  set projectId(id: number) {
    localStorage.setItem('projectId', id.toString());
    this.projectId$.next(id);
  }

  get category(): ICategoryCard[] {
    return this.category$.getValue();
  }

  set category(categories: ICategoryCard[]) {
    localStorage.setItem('categories', JSON.stringify(categories));
    this.category$.next(categories);
  }

  getCategories(): ICategoryCard[] | null {
    return JSON.parse(localStorage.getItem('categories') as string);
  }

  getCurrentCategory(categoryId: number | string): string {
    return this.category?.find((category) => category.id === +categoryId)
      ?.name as string;
  }

  get projects(): selectMenuOptions[] {
    return this.projects$.getValue();
  }

  set projects(projects: selectMenuOptions[]) {
    localStorage.setItem('projects', JSON.stringify(projects));
    this.projects$.next(projects);
  }

  getProjects(): selectMenuOptions[] | null {
    return JSON.parse(localStorage.getItem('projects') as string);
  }

  get runGetDetails(): { run: boolean; data: any } {
    return this.runGetDetails$.getValue();
  }

  set runGetDetails({ run, data }) {
    this.runGetDetails$.next({ run, data });
  }
}
