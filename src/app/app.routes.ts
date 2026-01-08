import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { roleGuard } from './auth/role.guard';
import { LayoutComponent } from './shared/component/layout/layout.component';

export const routes: Routes = [
  // Login Route
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      // Admin Routes
      {
        path: 'admin',
        canActivate: [roleGuard('ADMIN')],
        children: [
          {
            path: 'dashboard',
            loadComponent: () =>
              import(
                './dashboard/admin-dashboard/admin-dashboard.component'
              ).then((m) => m.AdminDashboardComponent),
          },
          {
            path: 'tasks',
            loadComponent: () =>
              import('./tasks/task-list/task-list.component').then(
                (m) => m.TaskListComponent
              ),
          },
          {
            path: 'employees',
            loadComponent: () =>
              import('./employees/employee-list/employee-list.component').then(
                (m) => m.EmployeeListComponent
              ),
          },
        ],
      },

      // Employee Routes
      {
        path: 'employee',
        canActivate: [roleGuard('EMPLOYEE')],
        children: [
          {
            path: 'dashboard',
            loadComponent: () =>
              import(
                './dashboard/employee-dashboard/employee-dashboard.component'
              ).then((m) => m.EmployeeDashboardComponent),
          },
          {
            path: 'my-tasks',
            loadComponent: () =>
              import('./tasks/task-list/task-list.component').then(
                (m) => m.TaskListComponent
              ),
          },
        ],
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/component/notfound/notfound.component').then(
        (m) => m.NotfoundComponent
      ),
  },
];
