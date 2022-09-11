import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule} from "@auth0/auth0-angular";
import {environment} from "../environments/environment";

@NgModule({
 declarations: [AppComponent],
 imports: [
   BrowserModule,
   RouterModule.forRoot([{
     path: '',
     loadChildren: () =>
         import('./remote-entry/entry.module').
         then(m => m.RemoteEntryModule)
   }], { initialNavigation: 'enabledBlocking' }),

   AuthModule.forRoot({
       ...environment.auth
   })
 ],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}