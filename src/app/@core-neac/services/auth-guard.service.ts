import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';
import { UserService } from './user.service';
import { take } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {

  
  constructor(
    private router: Router,
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{

    let is = false;
    this.userService.isAuthenticated.pipe(take(1)).subscribe((isResult) => {
      is = isResult;
      if (!is) {
        this.router.navigateByUrl('/news')
      }        
    })
    return is;
    
  }
}
