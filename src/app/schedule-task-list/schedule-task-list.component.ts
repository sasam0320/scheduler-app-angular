import { Component, OnInit } from '@angular/core';
import { ScheduleTask } from '../schedule-task';
import { ScheduleTaskService } from '../schedule-task-service/schedule-task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './schedule-task-list.component.html',
  styleUrls: ['./schedule-task-list.component.css']
})
export class ScheduleTaskListComponent implements OnInit {

  tasks: ScheduleTask[];

  constructor(private scheduleTaskService: ScheduleTaskService) { }

  ngOnInit() {
    this.scheduleTaskService.getTasks().subscribe(

      result => {
        this.tasks = result;
      }
    );
  }

  deleteTask(data) {

    this.scheduleTaskService.deleteTask(data.id).subscribe(

      result => {

        this.tasks = this.tasks.filter(task => task.id !== task.id);

        alert('Task with id: ' + result['id'] + ' has been deleted.');
      }
    );

  }

  scheduleTask(data) {

    console.log(data);

    this.scheduleTaskService.scheduleTask(data).subscribe(

      response => {

        alert('Schedule tasks are running!');
      }
    );
  }

}
