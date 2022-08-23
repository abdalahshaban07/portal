import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptanceHistoryComponent } from './acceptance-history.component';

describe('AcceptanceHistoryComponent', () => {
  let component: AcceptanceHistoryComponent;
  let fixture: ComponentFixture<AcceptanceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptanceHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptanceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
