import {Component} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'lms-portal-mfe-logout-button',
  template: `
      <button mat-button (click)="logOutWithRedirect()">
          <i class="material-icons">logout</i>LogOut
      </button>

  `,
  styles: [],
})
export class LogoutButtonComponent {


  constructor(public auth: AuthService) {}


  logOutWithRedirect(): void {
    this.auth.logout()
  }

}
