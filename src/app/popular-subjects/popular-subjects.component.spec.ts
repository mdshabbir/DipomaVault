import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSubjectsComponent } from './popular-subjects.component';

describe('PopularSubjectsComponent', () => {
  let component: PopularSubjectsComponent;
  let fixture: ComponentFixture<PopularSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularSubjectsComponent]
    });
    fixture = TestBed.createComponent(PopularSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
