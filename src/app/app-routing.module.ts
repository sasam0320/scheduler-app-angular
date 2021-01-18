import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleTaskAddComponent } from './schedule-task-add/schedule-task-add.component';
import { ScheduleTaskEditComponent } from './schedule-task-edit/schedule-task-edit.component';
import { ScheduleTaskListComponent } from './schedule-task-list/schedule-task-list.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: ScheduleTaskListComponent,
    data: { title: 'Schedule tasks'}
  },
  {
    path: 'tasks/add',
    component: ScheduleTaskAddComponent,
    data: { title: 'Add task'}
  },
  {
    path: 'tasks/edit/:id',
    component: ScheduleTaskEditComponent,
    data: { title: 'Edit task'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
