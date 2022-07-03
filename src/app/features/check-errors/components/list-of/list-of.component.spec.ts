import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfComponent } from './list-of.component';

describe('ListOfComponent', () => {
  let component: ListOfComponent;
  let fixture: ComponentFixture<ListOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
