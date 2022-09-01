import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingEvidencesTableComponent } from './missing-evidences-table.component';

describe('MissingEvidencesTableComponent', () => {
  let component: MissingEvidencesTableComponent;
  let fixture: ComponentFixture<MissingEvidencesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingEvidencesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingEvidencesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
