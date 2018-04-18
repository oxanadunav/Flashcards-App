import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorizeComponent } from './memorize.component';

describe('MemorizeComponent', () => {
  let component: MemorizeComponent;
  let fixture: ComponentFixture<MemorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
