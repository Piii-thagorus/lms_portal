import {Component, Injector, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'lms-portal-mfe-login-button',
  templateUrl: './login-button.component.html',
  styles: [],
})
export class LoginButtonComponent implements OnInit {


  constructor(public auth : AuthService) {}

  ngOnInit(): void {}

   loginWithRedirect(): void {
      this.auth.loginWithRedirect();
   }
}
