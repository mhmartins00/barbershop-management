import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@domain/auth/services/auth.services';

export const isLoggedInGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isLoggedIn()) {
    authService.purgeAndRedirect();
    router.navigate(['/']);
    return false;
  }

  return true;
};
