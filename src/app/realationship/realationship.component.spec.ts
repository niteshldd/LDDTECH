import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealationshipComponent } from './realationship.component';

describe('RealationshipComponent', () => {
  let component: RealationshipComponent;
  let fixture: ComponentFixture<RealationshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealationshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
