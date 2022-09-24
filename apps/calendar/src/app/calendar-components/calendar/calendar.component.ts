import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import {calendarOptions} from "../calendar-config"; // useful for typechecking

@Component({
  selector: 'lms-portal-mfe-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  calendar_options: CalendarOptions;
  deepChangeDetection: boolean | undefined;

  constructor() {
      this.calendar_options = calendarOptions
      this.deepChangeDetection = true;
  }

  ngOnInit(): void {}

}
