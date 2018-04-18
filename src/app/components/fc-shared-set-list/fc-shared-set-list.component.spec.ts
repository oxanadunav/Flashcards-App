import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcSharedSetListComponent } from './fc-shared-set-list.component';

describe('FcSharedSetListComponent', () => {
  let component: FcSharedSetListComponent;
  let fixture: ComponentFixture<FcSharedSetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcSharedSetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcSharedSetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
