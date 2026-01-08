import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks: any[] = [];
  showAddTask: boolean = false;

  taskSr = inject(TaskService);

  ngOnInit() {
    this.taskSr.getTasks().subscribe((res) => {
      this.tasks = res;
    });
  }

  hideAddTask(event: boolean) {
    this.showAddTask = event;
  }

  delete(id: number) {
    this.taskSr.deleteTask(id);
  }
}
