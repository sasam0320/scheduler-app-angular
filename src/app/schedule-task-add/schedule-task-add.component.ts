import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleTask } from '../schedule-task';
import { ScheduleTaskService } from '../schedule-task-service/schedule-task.service';


@Component({
  selector: 'app-schedule-task-add',
  templateUrl: './schedule-task-add.component.html',
  styleUrls: ['./schedule-task-add.component.css']
})
export class ScheduleTaskAddComponent implements OnInit {

  scheduleTaskForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private scheduleTaskService: ScheduleTaskService) {


  }

  ngOnInit() {


    this.scheduleTaskForm = this.formBuilder.group({

      name: ['', [Validators.required, Validators.maxLength(250)]],
      // tslint:disable-next-line:max-line-length
      recurrence: ['', [Validators.required, Validators.pattern('([0-5]?\\d)([0-5]?\\d)([01]?\\d|2[0-3])(0?[1-9]|[12]\\d|3[01])([1-9]|1[012])([0-6])')]],
      code: ['', Validators.required]
    });

  }

  addTask() {

    const taskData = {
      id: 0,
      name: this.scheduleTaskForm.controls.name.value,
      recurrence: this.scheduleTaskForm.controls.recurrence.value,
      code: this.scheduleTaskForm.controls.code.value
    };

    this.scheduleTaskService.addTask(taskData).subscribe(

      result => {
        console.log('Task with id: ' + result['id'] + 'has been added.');
        alert('Task with id: ' + result['id'] + 'has been added.');
        this.router.navigate(['/']);
      }, (err) => {

        console.log(err);
      }
    );
  }

}
