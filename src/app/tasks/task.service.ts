import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks$ = new BehaviorSubject<Task[]>(this.load());

  private load(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  getTasks() {
    return this.tasks$.asObservable();
  }

  addTask(task: Task) {
    const updatedTasks = [...this.tasks$.value, task];
    this.save(updatedTasks);
  }

  updateTask(updatedTask: Task) {
    const updated = this.tasks$.value.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.save(updated);
  }

  deleteTask(taskId: number) {
    const updated = this.tasks$.value.filter((task) => task?.id !== taskId);
    this.save(updated);
  }

  private save(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.tasks$.next(tasks);
  }
}
