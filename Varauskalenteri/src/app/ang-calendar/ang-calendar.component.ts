import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReservationService } from '../services/reservation.service';
import { DataService } from '../services/data.service';
import { VarausComponent } from '../varaus/varaus.component';

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
  }
};

/*
interface Item {
  value: string;
  viewValue: string;
}
*/

@Component({
  selector: 'app-ang-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ang-calendar.component.html',
  styleUrls: ['./ang-calendar.component.css'],
  styles: [
    `
      h3 {
        margin: 0 0 10px;
      }

      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
    `,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule]
})
export class AngCalendarComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  }

/*
  resItems: Item[] = [
    { value: '1', viewValue: 'Kamera' },
    { value: '2', viewValue: 'Valo' },
    { value: '3', viewValue: 'Green screen' },
  ];
*/

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

  events: CalendarEvent[] = [  //Taulukko lähes tyhjä, esimerkki-eventtejä vanhasta kalenterista

  ];

  activeDayIsOpen: boolean = false; // Kun kalenteri avataan niin tämän päivän tiedot ovat auki



  constructor(private modal: NgbModal, private router: Router) {
    
  }

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

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  //TÄÄ KUNTOON KUN HTTP PYYNNÖT TOIMII
/*
  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: this.varausForm.get('valittuLaite')?.value,
        start: this.varausForm.get('alkupaiva')?.value,
        end: this.varausForm.get('loppupaiva')?.value,
        color: colors['red'],
        draggable: false,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }
*/

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;

  }

/*
  varausJson() {
    const varausData = {
      puhelinnumero: this.varausForm.get('puhelinnumero')?.value,
      valittuLaite: this.varausForm.get('valittuLaite')?.value,
      alkupaiva: this.varausForm.get('alkupaiva')?.value,
      loppupaiva: this.varausForm.get('loppupaiva')?.value
    };

    return JSON.stringify(varausData, null, 4);
  }
*/


}
