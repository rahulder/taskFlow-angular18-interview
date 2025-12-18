import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() role: 'ADMIN' | 'EMPLOYEE' = 'EMPLOYEE';
  router = inject(Router);
  authSr = inject(AuthService);

  logout() {
    this.authSr.logout();
    this.router.navigate(['/login']);
  }
}
