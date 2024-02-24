import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const adminGuard: CanActivateFn = (route, state): boolean => {
  const authService = inject(AuthService);
  return authService.reauthenticateUser("admin");
};
