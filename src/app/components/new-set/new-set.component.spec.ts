import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSetComponent } from './new-set.component';

describe('NewSetComponent', () => {
  let component: NewSetComponent;
  let fixture: ComponentFixture<NewSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
