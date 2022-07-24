import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getList() {
    console.log('in get list customer service');

    return of();
  }
}
