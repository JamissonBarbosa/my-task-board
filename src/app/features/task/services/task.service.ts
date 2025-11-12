import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Task } from '../model/task.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public readonly _apiUrl = environment.apiUrl;

  private readonly _httpClient = inject(HttpClient);

  public tasks = signal<Task[]>([]);

  public nmberOfTasks = computed(() => this.tasks().length);

  public getTasks(): Observable<Task[]> {
    return this._httpClient.get<Task[]>(`${this._apiUrl}/tasks`).pipe(
      tap(tasks => {
        const sortedTasks = this.getSortedTasks(tasks);
        this.tasks.set(sortedTasks);
      })
    );
  }

  public createTask(task: Partial<Task>): Observable<Task> {
    return this._httpClient.post<Task>(`${this._apiUrl}/tasks`, task);
  }

  public updateTaskList(newTask: Task): void {
    const updateTasks = [...this.tasks(), newTask];
    const sortedTasks = this.getSortedTasks(updateTasks);

    this.tasks.set(sortedTasks);
  }

  public updateTask(updateTask: Task): Observable<Task> {
    return this._httpClient.put<Task>(
      `${this._apiUrl}/tasks/${updateTask.id}`,
      updateTask
    );
  }

  updateTaskList

  public getSortedTasks(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => a.title.localeCompare(b.title));
  }
}
