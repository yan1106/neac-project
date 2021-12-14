import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {

  constructor(
  ) {
    
  }

  getToken(): string {
    return window.localStorage['jwtToken'];
  }

  getUserName(): string {
    return window.localStorage['user'];
  }

  saveToken(token: String,user: String) {
    window.localStorage['user'] = user;
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
    window.localStorage.removeItem('user');
  }


}
