import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbLoginComponent } from '@nebular/auth';
import { NbAuthJWTToken, NbAuthService,NbAuthResult } from '@nebular/auth';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent {
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = 'email';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;

  // isVisibleMiddle = false;
  // isLoginStatus = true
  constructor(private authService: NbAuthService,private routerr: Router,private cdr: ChangeDetectorRef){
    super(authService,{},cdr,routerr)
    // this.authService.onTokenChange()
    // .subscribe((token: NbAuthJWTToken) => {

    //   if (token.isValid()) {
    //     this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
    //   }

    // });
  }

  ngOnInit(): void {
  }

  // login(): void {
  //   this.authService.authenticate(this.strategy, this.user).subscribe((result: any) => {
  //     this.submitted = false;
  //     console.log(result);
  //     // if (result.isSuccess()) {
  //     //   this.messages = result.getMessages();
  //     // } else {
  //     //   this.errors = result.getErrors();
  //     // }

  //     // const redirect = result.getRedirect();
  //     // if (redirect) {
  //     //   setTimeout(() => {
  //     //     return this.router.navigateByUrl(redirect);
  //     //   }, this.redirectDelay);
  //     // }
  //     // this.cd.detectChanges();
  //   });
  // }
}
