import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FullCalendarModule} from "@fullcalendar/angular";
import { RemoteEntryComponent } from './entry.component';
import { CalendarComponent } from '../calendar-components/calendar/calendar.component';

@NgModule({
  declarations: [RemoteEntryComponent, CalendarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
    FullCalendarModule
  ],
  providers: [],
  exports: [RemoteEntryComponent],
})
export class RemoteEntryModule {}
