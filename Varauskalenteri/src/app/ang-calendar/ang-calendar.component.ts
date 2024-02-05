import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef} from '@angular/core';
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
    {value: 'laite-0', viewValue: 'Kamera'},
    {value: 'laite-1', viewValue: 'Valo'},
    {value: 'laite-2', viewValue: 'Green screen'},
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

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'Testi',
      color: { ...colors['red'] },
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
      color: { ...colors['yellow'] },
      actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: { ...colors['blue'] },
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: { ...colors['yellow'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];

  activeDayIsOpen: boolean = true; // Kun kalenteri avataan niin tämän päivän tiedot ovat auki

  /*varausTiedot = { //Tässä pohja varauksen tiedoille, jotka lähetetään metodille, joka lähettää ne backendille
    puhelinnumero: "",
    valittuLaite: "",
    valitutPaivat: {
      alku: null,
      loppu: null,
    },
  };
*/
  varausForm: FormGroup;
  varausTapahtunut = false;



  constructor(private modal: NgbModal, private router: Router, private fb: FormBuilder) {
    this.varausForm = this.fb.group({
      puhelinnumero: ['', Validators.required],
      valittuLaite: ['', Validators.required],
      valitutPaivat: new FormControl<Date | null>(null),
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
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors['red'],
        draggable: true,
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

  

  varaa() {
    const varausData = {
      puhelinnumero: this.varausForm.get('puhelinnumero')?.value,
      valittuLaite: this.varausForm.get('valittuLaite')?.value,
      valitutPaivat: this.varausForm.get('valitutPaivat')?.value,
    };
  
    const varausJson = JSON.stringify(varausData, null, 4);
  
    console.log('Varaustiedot JSON-muodossa:', varausJson);
    // Lähetä varausdata backendiin tässä vaiheessa

    this.varausTapahtunut = true;
  }

  varausJson() {
    const varausData = {
      puhelinnumero: this.varausForm.get('puhelinnumero')?.value,
      valittuLaite: this.varausForm.get('valittuLaite')?.value,
      valitutPaivat: this.varausForm.get('valitutPaivat')?.value,
    };

    return JSON.stringify(varausData, null, 4);
  }
  

  

  logout() {
    this.router.navigate(['/logout']);
  }
}