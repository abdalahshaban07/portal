import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedCountComponent } from './joined-count.component';

describe('JoinedCountComponent', () => {
  let component: JoinedCountComponent;
  let fixture: ComponentFixture<JoinedCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinedCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
