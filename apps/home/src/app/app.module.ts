import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {ROUTES} from "./app.routes";
import {MaterialExampleModule} from "@lms-portal-mfe/shared";
import {NavigationModule} from "./navigation/navigation.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {loadRemoteModule} from "@nrwl/angular/mf";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
    NavigationModule,
    RouterModule.forRoot(
        ROUTES,
        {initialNavigation: 'enabledBlocking'}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
