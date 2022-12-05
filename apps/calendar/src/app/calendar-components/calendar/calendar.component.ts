import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent,  CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import {  EventColor } from 'calendar-utils';
import { addDays, addHours, endOfDay, endOfMonth, isSameDay, isSameMonth, startOfDay, subDays } from 'date-fns';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { DatePipe } from '@angular/common';




const colors: Record<string, EventColor> = {

      red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
      blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
      },
      yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
      },
}
@Component({
  selector: 'lms-portal-mfe-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {

    editEventForm = new FormGroup({

      title : new FormControl(),
      start: new FormControl(),
      end: new FormControl(),
      allDay: new FormControl()
    });
  
   @ViewChild('modalContent', { static: true }) modalContent !: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;
  
  selectedEvent : CalendarEvent | undefined;

  secondaryModal : NgbModal;

  viewDate: Date = new Date();

  modalData !: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: { ...colors.red },
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: { ...colors.yellow },
      actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: { ...colors.blue },
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: { ...colors.yellow },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];

  activeDayIsOpen= true;

  constructor(private modal: NgbModal, private datePipe: DatePipe) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  onEventClick(content: any, event: CalendarEvent): void{

      this.selectedEvent = event

      this.editEventForm.patchValue({
        title: event.title,
        start: this.datePipe.transform(event.start, "medium"),
        end: this.datePipe.transform(event.end, "medium"),
        allDay: event.allDay
      })
      this.modal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result;

      console.log(this.editEventForm.value)
  }

  confirmDelete(content: any): void{
      this.modal.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  handleEvent(action: string, event: CalendarEvent): void {
    const content = `
    <div class="modal-body">
        <h3>${event.title}</h3>
    </div>
    ` 
    
    this.modalData = { event, action };

    this.modal.open(content, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent() {
    this.events = this.events.filter((event) => event !== this.selectedEvent);
    this.selectedEvent = undefined;
    
  }

  openEditEventForm(content: any): void{
    this.modal.open(content)
    // this.events = this.events.filter((event) => { event !== this.selectedEvent})
  }

  saveEditEventForm():void{
            // event.start = new Date ( this.datePipe.transform(
            //   this.editEventForm.value.start, "full")  as string );
   this.events =   this.events.map((event)=>{

          if(event === this.selectedEvent){

            event.title = this.editEventForm.value.title;

            event.allDay = this.editEventForm.value.allDay;
            
            // event.start = new Date ( this.datePipe.transform(
            //   this.editEventForm.value.start, "full")  as string );

            event.end = new Date ( this.datePipe.transform(
              this.editEventForm.value.end, "full")  as string );
              this.selectedEvent = event;

              return {...event}
          };
          return event
      });
  }
  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}

