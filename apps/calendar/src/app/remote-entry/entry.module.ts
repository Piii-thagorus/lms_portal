import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'
import { RemoteEntryComponent } from './entry.component';
import { CalendarComponent } from '../calendar-components/calendar/calendar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [RemoteEntryComponent, CalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    MatCardModule,
    MatIconModule,
    NgbModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  exports: [RemoteEntryComponent],
})
export class RemoteEntryModule {}
