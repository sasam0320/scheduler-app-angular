import { TestBed } from '@angular/core/testing';

import { ScheduleTaskService } from './schedule-task.service';

describe('ScheduleTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScheduleTaskService = TestBed.get(ScheduleTaskService);
    expect(service).toBeTruthy();
  });
});
