import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentStudyComponent } from './current-study.component';

describe('CurrentStudyComponent', () => {
  let component: CurrentStudyComponent;
  let fixture: ComponentFixture<CurrentStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
