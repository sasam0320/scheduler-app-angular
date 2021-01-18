import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTaskAddComponent } from './schedule-task-add.component';

describe('ScheduleTaskAddComponent', () => {
  let component: ScheduleTaskAddComponent;
  let fixture: ComponentFixture<ScheduleTaskAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTaskAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
