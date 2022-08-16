import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareObsService {
  private readonly projectId$ = new BehaviorSubject<number>(0);
  public project$obs = this.projectId$.asObservable();
  constructor() {}

  get projectId(): number {
    return this.projectId$.getValue();
  }
  set projectId(id: number) {
    this.projectId$.next(id);
  }
}
