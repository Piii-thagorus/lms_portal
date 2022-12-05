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
import {FlatpickrModule} from 'angularx-flatpickr'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [RemoteEntryComponent, CalendarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModalModule,
    MatCardModule,
    MatIconModule,
    NgbModule,
    FontAwesomeModule,
    FlatpickrModule.forRoot(),
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
  providers: [DatePipe],
  exports: [RemoteEntryComponent],
})
export class RemoteEntryModule {

    constructor(iconLibrary: FaIconLibrary){
      iconLibrary.addIcons(faCalendar);
    }
}
