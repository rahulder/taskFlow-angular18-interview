import { Component, inject } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  employees: any[] = [];
  employeeSr = inject(EmployeeService);

  ngOnInit() {
    this.getEmps();
  }

  getEmps() {
    this.employees = this.employeeSr.getEmployees();
  }
}
