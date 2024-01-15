import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, } from '@angular/core';
import { Router } from '@angular/router';

interface Item {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-kalenteri',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './kalenteri.component.html',
  styleUrls: ['./kalenteri.component.css']
})

export class KalenteriComponent implements OnInit, OnDestroy {
  daysOfWeek: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  selectedDate: Date = new Date();
  bookings: any = {};
  hours: number[] = Array.from({ length: 24 }, (_, i) => i);

  resItems: Item[] = [
    {value: 'laite-0', viewValue: 'Kamera'},
    {value: 'laite-1', viewValue: 'Valo'},
    {value: 'laite-2', viewValue: 'Green screen'},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
  getWeekDays(): Date[] {
    const weekDays: Date[] = [];
    const currentDay = this.selectedDate;
    const dayOfWeek = currentDay.getDay();


    const startOfWeek = new Date(currentDay);
    startOfWeek.setDate(currentDay.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1));


    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      weekDays.push(day);
    }

    return weekDays;
  }

  getWeekNumber(date: Date): number {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

  previousWeek(): void {
    this.selectedDate.setDate(this.selectedDate.getDate() - 7);
  }

  nextWeek(): void {
    this.selectedDate.setDate(this.selectedDate.getDate() + 7);
  }


  logout() {
    this.router.navigate(['/logout']);
  }
}
