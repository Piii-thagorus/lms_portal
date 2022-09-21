import {Component, Injector, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'lms-portal-mfe-auth-component',
  templateUrl: './auth-component.component.html',
  styles: [],
})
export class AuthComponentComponent implements OnInit {

  constructor(public auth: AuthService) {

  }

  ngOnInit() {
      //this.authO = this.injector.get(AuthService);
  }

}
