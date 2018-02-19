import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastStudyComponent } from './past-study.component';

describe('PastStudyComponent', () => {
  let component: PastStudyComponent;
  let fixture: ComponentFixture<PastStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
