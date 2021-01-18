import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTaskEditComponent } from './schedule-task-edit.component';

describe('ScheduleTaskEditComponent', () => {
  let component: ScheduleTaskEditComponent;
  let fixture: ComponentFixture<ScheduleTaskEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTaskEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
