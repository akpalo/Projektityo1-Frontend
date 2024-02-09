import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReservationService } from '../services/reservation.service';

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
};

interface Item {
  value: string;
  viewValue: string;
}
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

  resItems: Item[] = [
    { value: 'Kamera', viewValue: 'Kamera' },
    { value: 'Valo', viewValue: 'Valo' },
    { value: 'Green screen', viewValue: 'Green screen' },
  ];

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

  varausForm: FormGroup;
  varausTapahtunut = false;

  constructor(private modal: NgbModal, private router: Router, private fb: FormBuilder, private reservationService: ReservationService) {
    this.varausForm = this.fb.group({
      puhelinnumero: ['', Validators.required],
      valittuLaite: ['', Validators.required],
      alkupaiva: [null], // Alkupäivän form control
      loppupaiva: [null] // Loppupäivän form control
    });



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

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;

  }

  generateReservationId(): number {
    // Tässä voit toteuttaa logiikan, jolla generoit uuden varausnumeron
    // Esimerkiksi voit käyttää aikaleimoja tai satunnaislukuja
    return Math.floor(Math.random() * 1000); // Esimerkkinä generoidaan satunnainen numero välillä 0-999
  }



  varaa() {
    const puhelinnumero = this.varausForm.get('puhelinnumero')?.value;
    const valittuLaite = this.varausForm.get('valittuLaite')?.value;
    const alkupaiva = this.varausForm.get('alkupaiva')?.value;
    const loppupaiva = this.varausForm.get('loppupaiva')?.value;

    const varausData = {
      id: this.generateReservationId(), // Generoi varausnumero
      owner: puhelinnumero,
      target: valittuLaite,
      startTime: alkupaiva,
      endTime: loppupaiva
    };

    this.reservationService.addReservation(varausData).subscribe({
      next: (response) => {
        console.log('Varaus lähetetty backendille', response);
        // Tee jotain, kun varaus on lähetetty onnistuneesti
      },
      error: (error) => {
        console.error('Virhe varauksen lähettämisessä:', error);
        // Tähän mitä tehdään, jos varauksen tekemisessä tulee virhe
      },
      complete: () => {
        console.log("Varaus tehty onnistuneesti!")
      }
    });
  }


  varausJson() {
    const varausData = {
      puhelinnumero: this.varausForm.get('puhelinnumero')?.value,
      valittuLaite: this.varausForm.get('valittuLaite')?.value,
      alkupaiva: this.varausForm.get('alkupaiva')?.value,
      loppupaiva: this.varausForm.get('loppupaiva')?.value
    };

    return JSON.stringify(varausData, null, 4);
  }

  errorJson() {

  }



  logout() {
    this.router.navigate(['/logout']);
  }
}
