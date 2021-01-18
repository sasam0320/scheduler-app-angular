import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScheduleTaskListComponent } from './schedule-task-list/schedule-task-list.component';
import { ScheduleTaskAddComponent } from './schedule-task-add/schedule-task-add.component';
import { ScheduleTaskEditComponent } from './schedule-task-edit/schedule-task-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleTaskListComponent,
    ScheduleTaskAddComponent,
    ScheduleTaskEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
