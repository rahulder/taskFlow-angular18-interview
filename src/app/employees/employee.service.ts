import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees = [
    {
      id: 1,
      name: 'Rahul Patel',
      email: 'rahul@test.com',
      role: 'Employee',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Amit Shah',
      email: 'amit@test.com',
      role: 'Employee',
      status: 'Inactive',
    },
    {
      id: 3,
      name: 'Neha Joshi',
      email: 'neha@test.com',
      role: 'Employee',
      status: 'Active',
    },
  ];

  constructor() {}

  getEmployees() {
    return this.employees;
  }
}
