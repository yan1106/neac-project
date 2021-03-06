import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';
import { UserData } from '../models';
import { map ,  distinctUntilChanged } from 'rxjs/operators';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  public isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  //private isAuthenticatedSubjectLoginAction = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  //public isAuthenticatedLoginAction = this.isAuthenticatedSubjectLoginAction.asObservable();

  constructor (
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) {
    this.http.post<boolean>('api/Signup/VaildToken', { "string": this.jwtService.getToken() }).subscribe((data) => {
      this.isAuthenticatedSubject.next(data);
    });

  }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get('/user')
      .subscribe(
        data => this.setAuth(data.user),
        err => this.purgeAuth()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  vaildToken(): void {

    this.http.post<boolean>('api/Signup/VaildToken', { email: this.jwtService.getToken() }).subscribe((data) => {
      if (data) {
        this.isAuthenticatedSubject.next(false);
      } else {
        this.isAuthenticatedSubject.next(true);
      }
    }); 
  }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token, user.userName);
    this.vaildToken();
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(true);
  }

  attemptAuth(route: string, credentials: UserData): Observable<User> {
    return this.apiService.post('api/Signup' + route, credentials)
      .pipe(map(
        data => {
        this.setAuth(data);
        return data;
      }
    ));
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user: any): Observable<User> {
    return this.apiService
    .put('/user', { user })
    .pipe(map(data => {
      // Update the currentUser observable
      this.currentUserSubject.next(data.user);
      return data.user;
    }));
  }

}
