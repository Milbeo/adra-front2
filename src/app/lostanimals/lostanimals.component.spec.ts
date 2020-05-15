import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostanimalsComponent } from './lostanimals.component';

describe('LostanimalsComponent', () => {
  let component: LostanimalsComponent;
  let fixture: ComponentFixture<LostanimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostanimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostanimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
