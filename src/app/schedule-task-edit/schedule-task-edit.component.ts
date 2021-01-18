import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleTask } from '../schedule-task';
import { ScheduleTaskService } from '../schedule-task-service/schedule-task.service';

@Component({
  selector: 'app-schedule-task-edit',
  templateUrl: './schedule-task-edit.component.html',
  styleUrls: ['./schedule-task-edit.component.css']
})
export class ScheduleTaskEditComponent implements OnInit {

  scheduleTaskForm: FormGroup;
  task: ScheduleTask;
  id: number;
  message = '';

  constructor(private router: Router, private route: ActivatedRoute,
    private scheduleTaskService: ScheduleTaskService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.getTaskInfo(this.route.snapshot.params['id']);

    this.scheduleTaskForm = this.formBuilder.group({
      id: null,
      name: ['', [Validators.required, Validators.maxLength(250)]],
      // tslint:disable-next-line:max-line-length
      recurrency: ['', [Validators.required, Validators.pattern('([0-5]?\\d)([0-5]?\\d)([01]?\\d|2[0-3])(0?[1-9]|[12]\\d|3[01])([1-9]|1[012])([0-6])')]],
      code: ['', Validators.required]
    });
  }

  getTaskInfo(id) {


    this.scheduleTaskService.getTaskById(id).subscribe(data => {
      this.id = data.id;
       this.scheduleTaskForm.setValue({
         id: data.id,
         name: data.name,
         recurrency: data.recurrence,
         code: data.code
       });

       this.task = this.scheduleTaskForm.value;
       console.log(data);
    });
  }

  editTask() {

    this.task.name = this.scheduleTaskForm.controls.name.value;
    this.task.recurrence = this.scheduleTaskForm.controls.recurrency.value;
    this.task.code = this.scheduleTaskForm.controls.code.value;

    this.scheduleTaskService.editTask(this.id, this.task)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'The schedule task was updated successfully!';
        alert(this.message);
      },
      error => {
        console.log(error);
      });
  }

}
