import {Component, Inject, Injector, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'lms-portal-mfe-logout-button',
  templateUrl: './logout-button.component.html',
  styles: [],
})
export class LogoutButtonComponent implements OnInit {


  constructor(
      public auth: AuthService,
     //@Inject(Document) private doc: Document
  ) {}

  ngOnInit(): void {
      //this.AUTH = this.injector.get(AuthService);
  }

  logOutWithRedirect(): void {
    this.auth.logout()
  }

  // getAuthOService(): AuthService {
  //   return this.AUTH
  // }
}
