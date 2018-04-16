import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcSetListComponent } from './fc-set-list.component';

describe('FcSetListComponent', () => {
  let component: FcSetListComponent;
  let fixture: ComponentFixture<FcSetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcSetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcSetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
