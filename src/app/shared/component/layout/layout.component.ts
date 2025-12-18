import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  role: 'ADMIN' | 'EMPLOYEE' = 'EMPLOYEE';

  ngOnInit() {
    this.role = JSON.parse(localStorage.getItem('user') || '{}').role;
  }
}
