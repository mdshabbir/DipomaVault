import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingInformationComponent } from './sliding-information.component';

describe('SlidingInformationComponent', () => {
  let component: SlidingInformationComponent;
  let fixture: ComponentFixture<SlidingInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidingInformationComponent]
    });
    fixture = TestBed.createComponent(SlidingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
