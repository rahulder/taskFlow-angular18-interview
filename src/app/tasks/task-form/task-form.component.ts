import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;
  @Output() hideAddTask = new EventEmitter<boolean>(false);

  fb = inject(FormBuilder);
  taskSr = inject(TaskService);

  ngOnInit() {
    this.taskForm = this.fb.group({
      tasks: this.fb.array([this.createTask()]),
    });
  }

  createTask(): FormGroup {
    return this.fb.group({
      id: [Date.now()], // auto-generated id
      title: [''],
      description: [''],
      priority: ['Medium'],
      status: ['Pending'],
      assignedTo: [''],
      dueDate: [''],
    });
  }

  get tasks(): FormArray {
    return this.taskForm.get('tasks') as FormArray;
  }

  addTask() {
    this.tasks.push(this.createTask());
  }

  removeTask(index: number) {
    this.tasks.removeAt(index);
  }

  submit() {
    this.taskSr.addTask(this.taskForm.value.tasks);
    this.hideAddTask.emit(true);
  }
}
