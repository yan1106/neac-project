import { Injectable } from '@angular/core';
import { CanActivate,Router  } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { take,map,tap } from 'rxjs/operators';


@Injectable()
export class AuthNoGuard implements CanActivate {

  constructor(private authService: NbAuthService,private router: Router) {
  }

  canActivate() {
    return this.authService.isAuthenticated().pipe(take(1), map(isAuth => !isAuth)).pipe(
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['pages/dashboard']);
        }
      })
    );
  }
}