import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  fb = inject(FormBuilder);
  loginSr = inject(AuthService);
  router = inject(Router);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  ngOnInit() {}

  submit() {
    if (this.loginForm.valid) {
      const email = this.loginForm?.value?.email as string;
      const password = this.loginForm?.value?.password as string;

      this.loginSr.login(email, password);

      const role = JSON.parse(localStorage.getItem('user') || '{}').role;

      if (role === 'ADMIN') this.router.navigateByUrl('/admin/dashboard');
      else this.router.navigateByUrl('/employee/dashboard');
    }
  }
}
