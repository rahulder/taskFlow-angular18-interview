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

  addTask(tasks: Task[]) {
    const normalizeTasks = tasks.map((task) => this.normalizeTask(task));
    const updatedTasks = [...this.tasks$.value, ...normalizeTasks];
    this.save(updatedTasks);
  }

  // Ensure task consistency (ID, defaults)
  private normalizeTask(task: Task): Task {
    return {
      ...task,
      id: task.id ?? Date.now() + Math.random(), // safe unique ID
      status: task.status || 'Pending',
      priority: task.priority || 'Medium',
    };
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
