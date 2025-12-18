import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggin = signal<boolean>(false);

  login(email: string, password: string) {
    if (email === 'admin@test.com' && password === '123123') {
      localStorage.setItem('user', JSON.stringify({ role: 'ADMIN' }));
      this.isLoggin.set(true);
      return true;
    }
    if (email === 'emp@test.com' && password === '123123') {
      localStorage.setItem('user', JSON.stringify({ role: 'EMPLOYEE' }));
      this.isLoggin.set(true);
      return true;
    }
    return false;
  }

  getRole() {
    return JSON.parse(localStorage.getItem('user') || '{}')?.role;
  }

  logout() {
    this.isLoggin.set(false);
    localStorage.clear();
  }
}
