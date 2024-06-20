import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  console.log("authGuard", auth.isAuth, router.url)
  if (!auth.isAuth) {
    router.navigateByUrl('/login')
    return false
  }
  return true;
};
