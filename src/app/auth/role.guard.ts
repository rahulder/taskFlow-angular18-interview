import { CanActivateFn } from '@angular/router';

export const roleGuard = (role: string): CanActivateFn => {
  return () => JSON.parse(localStorage.getItem('user') || '{}')?.role === role;
};
