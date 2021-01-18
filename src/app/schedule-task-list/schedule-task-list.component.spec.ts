import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTaskListComponent } from './schedule-task-list.component';

describe('TaskListComponent', () => {
  let component: ScheduleTaskListComponent;
  let fixture: ComponentFixture<ScheduleTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
