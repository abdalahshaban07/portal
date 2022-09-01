import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingEvidencesComponent } from './missing-evidences.component';

describe('MissingEvidencesComponent', () => {
  let component: MissingEvidencesComponent;
  let fixture: ComponentFixture<MissingEvidencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingEvidencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingEvidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
