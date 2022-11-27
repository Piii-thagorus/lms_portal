import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'lms-portal-mfe-signup-button',
  template: `
      <button mat-button (click)="signUp()">
          <i class="material-icons">person_add</i>Sign Up
      </button>
  `,
})
export class SignupButtonComponent {

  constructor(private auth: AuthService) {}

  signUp(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: 'profile'
      },
      screen_hint: 'signup',
    });
  }
}
