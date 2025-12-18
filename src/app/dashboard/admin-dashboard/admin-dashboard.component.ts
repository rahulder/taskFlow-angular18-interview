import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../tasks/task.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit {
  total: number = 0;
  completed: number = 0;

  taskSr = inject(TaskService);

  ngOnInit() {
    this.taskSr.getTasks().subscribe((tasks) => {
      this.total = tasks.length;
      this.completed = tasks.filter((t) => t.status === 'Completed').length;
    });
  }
}
