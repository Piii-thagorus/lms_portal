import {Component} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'lms-portal-mfe-login-button',
  template:  `
      <button mat-button (click)="loginWithRedirect()">
          <i class="material-icons">login</i>LogIn
      </button>
  `,
  styles: [],
})
export class LoginButtonComponent {


  constructor(public auth : AuthService) {}


   loginWithRedirect(): void {
      this.auth.loginWithRedirect({
          appState: {
            target: "/",
          },
          screen_hint: "login",
      });
   }
}
