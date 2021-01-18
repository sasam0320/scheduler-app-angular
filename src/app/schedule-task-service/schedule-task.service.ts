import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ScheduleTask } from '../schedule-task';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/tasks';
const jobsUrl = 'http://localhost:8080/api/jobs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleTaskService {

  constructor(private http: HttpClient) { }

  getTasks() {

    return this.http.get<ScheduleTask[]>(`${baseUrl}`);
  }

  getTaskById(id: number) {

    return this.http.get<ScheduleTask>(`${baseUrl}/${id}`);
  }

  getTaskByName(name: string) {

    const  headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const params = new HttpParams();
    params.append('name', name);

    return this.http.get<ScheduleTask>(`${baseUrl}/search`, { headers: headers, params: params });
  }

  addTask(data: ScheduleTask): Observable<ScheduleTask> {

    console.log(data);

       return  this.http.post<any>(`${baseUrl}/create`, data);
  }

  editTask(taskId: number, data: ScheduleTask): Observable<ScheduleTask> {

    console.log(data);

    return this.http.put<any>(`${baseUrl}/edit/${taskId}`, data);
  }

  deleteTask(taskId: number) {

    return this.http.delete(`${baseUrl}/${taskId}`);
  }

  scheduleTask(tasks: ScheduleTask[]): Observable<any> {

    return this.http.post<any>(`${jobsUrl}`, tasks);
  }
}
