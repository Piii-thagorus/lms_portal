import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogInComponent } from './login.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AuthComponentComponent} from "./components/auth-component/auth-component.component";
import {LogoutButtonComponent} from "./components/logout-button/logout-button.component";
import {LoginButtonComponent} from "./components/login-button/login-button.component";
import {AuthModule} from "@auth0/auth0-angular";
import {environment} from "../../environments/environment";

@NgModule({
  declarations: [LogInComponent, AuthComponentComponent, LogoutButtonComponent, LoginButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LogInComponent,
      },
    ]),
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AuthModule.forRoot({
        ...environment.auth
      })
  ],
  providers: [],
})
export class RemoteEntryModule {}
