import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegedetailComponent } from './collegedetail.component';

describe('CollegedetailComponent', () => {
  let component: CollegedetailComponent;
  let fixture: ComponentFixture<CollegedetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegedetailComponent]
    });
    fixture = TestBed.createComponent(CollegedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
