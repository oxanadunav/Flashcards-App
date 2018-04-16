import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcSetComponent } from './fc-set.component';

describe('FcSetComponent', () => {
  let component: FcSetComponent;
  let fixture: ComponentFixture<FcSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
