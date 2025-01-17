import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
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
import { Reservation } from '../api/models';
import { ItemService } from '../services/item.service';
import { Item } from '../api/models';
import { forkJoin } from 'rxjs';


/*interface CommonType {
  id: number;
  name: string;
  target: number;
  owner: string;
  startTime: Date;
  endTime: Date;
}
*/



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


export class AngCalendarComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  modalData: { action: string; event: CalendarEvent; }



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



  // Esimerkki eventit:
  events: CalendarEvent[] = [];
  varaukset: Reservation[] = [];
  resItems: Item[] = [];
  //combinedArray: CommonType[] = [];




  // Kun kalenteri avataan niin tämän päivän tiedot ovat auki
  activeDayIsOpen: boolean = false;


  constructor(private modal: NgbModal, private router: Router, private dataService: DataService, private reservationService: ReservationService, private itemsService: ItemService) { }


  ngOnInit(): void {
    this.haeVarauksetKalenteriin();
  }

  haeVarauksetKalenteriin() {
    this.reservationService.getReservations().subscribe({
      next: (response: Reservation[]) => {
        console.log('Varaukset haettu onnistuneesti', response);
        this.varaukset = response;
        this.ItemsToList();

      },
      error: (error) => {
        console.error('Virhe varauksien haussa:', error);
        // Tähän mitä tehdään, jos varauksien hakemisessa tulee virhe
      },
      complete: () => {
        console.log("Varaukset haettu onnistuneesti!")
      }
    });
  }

  ItemsToList() {
    this.itemsService.getItem().subscribe({
      next: (response: Item[]) => {
        console.log("Itemit haettu onnistuneesti", response)
        this.resItems = response;

      },
      error: (error) => {
        console.error('Virhe itemien hausssa', error)
        console.error('error')
      },
      complete: () => {
        console.log("Itemit haettu?")
        this.updateCalendar();
      },
    })
  }

  updateCalendar() {
    for (let varaus of this.varaukset) {
      let item = this.resItems.find(item => item.id === varaus.target);
      this.events = [
        ...this.events,
        {
          title: item?.name ?? '',
          start: new Date(varaus.startTime),
          end: new Date(varaus.endTime),
          color: colors['yellow'],
          draggable: false,
          resizable: {
            beforeStart: false,
            afterEnd: false,
          },
        },
      ];
    }
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


  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
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
}