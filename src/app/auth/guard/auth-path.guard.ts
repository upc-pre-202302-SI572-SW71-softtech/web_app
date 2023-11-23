import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authPathGuard: CanActivateFn = (route, state) => {
  const router= inject(Router);
  const service = inject(AuthService);
  if(service.isAuthenticated() && route.url[0].path === 'register')
  {
    alert("You are already logged in");
    router.navigate(['/list-agencies']);
    return true;
  }
  if(route.url[0].path === 'register')
  {
    return true;
  }
  if(service.isAuthenticated()) {
    return true;
  } else {
    alert("You must be logged in to access this page");
    router.navigate(['/unauthorized']);
    return false;
  }

};
