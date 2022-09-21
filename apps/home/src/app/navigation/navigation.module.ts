import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MaterialExampleModule } from '@lms-portal-mfe/shared';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top.menu/top.menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { RightMenuItemComponent } from './right-menu-item/right-menu-item.component';
import {loadRemoteModule} from "@nrwl/angular/mf";
import {ROUTES} from "../app.routes";
import {AppModule} from "../app.module";
import {AuthModule} from "@auth0/auth0-angular";
import {environment} from "../../environments/environment";

@NgModule({
  declarations: [
    NavigationComponent,
    LeftMenuComponent,
    TopMenuComponent,
    RightMenuComponent,
    RightMenuItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    FlexLayoutModule,
    RouterModule,
    NgScrollbarModule,
    RouterModule.forRoot(
          ROUTES
      ),
      AuthModule.forRoot({
        ...environment.auth
      }),
  ],
  exports: [NavigationComponent, LeftMenuComponent],
})
export class NavigationModule {}
