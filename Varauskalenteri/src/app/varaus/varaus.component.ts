import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationService } from '../services/reservation.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { DateFormatPipe } from '../date-format.pipe';
import { AngCalendarComponent } from '../ang-calendar/ang-calendar.component';
import { DataService } from '../services/data.service';
import { ItemDto } from '../api/models';
import { Item } from '../api/models';
import { ItemService } from '../services/item.service';
import { catchError, throwError } from 'rxjs';

/*interface Item {
  value: string;
  viewValue: string;
}*/

@Component({
  selector: 'app-varaus',
  templateUrl: './varaus.component.html',
  styleUrls: ['./varaus.component.css'],
  providers: [DateFormatPipe]
})

export class VarausComponent implements OnInit {

  @ViewChild(AngCalendarComponent, { static: true }) angCalendarComponent: AngCalendarComponent;

  /*resItems: Item[] = [
    { value: '1', viewValue: 'Kamera' },
    { value: '2', viewValue: 'Valo' },
    { value: '3', viewValue: 'Green screen' },
  ];

  ngOnInit(): void {
    this.dataService.getItems()
      .pipe(
        catchError((error: any) => {
          console.log('Error:', error);
          return throwError(error);
        })
      )
      .subscribe(data => {
        this.resItems = data.map(item => ({ value: item.id.toString(), viewValue: item.name }));
      });
  }*/

  resItems: Item[] = []

  

  /*resItems: ItemDto[] = [];
  
  ngOnInit() {
    this.dataService.getItems()
      .pipe(
        catchError((error: any) => {
          console.log('Error:', error);
          return throwError(error);
        })
      )
      .subscribe(data => {
        this.resItems = data;
      });
  }*/

  varausForm: FormGroup;
  varausTapahtunut = false;


  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder, private reservationService: ReservationService, private dateFormatPipe: DateFormatPipe, private itemsService: ItemService) {
    this.varausForm = this.fb.group({
      puhelinnumero: ['', Validators.required],
      valittuLaite: ['', Validators.required],
      alkupaiva: [''], // Alkupäivän form control
      loppupaiva: [''] // Loppupäivän form control

    });
  }
  
  ngOnInit(): void {
    this.ItemsToList();
  } 

  ItemsToList() {
    this.itemsService.getItem().subscribe({
      next: (response: Item[]) => {
        console.log("Itemit haettu onnistuneesti")
        this.resItems = response;
      },
      error: (error) => {
        console.error('Virhe itemien hausssa', error)
        console.error('error')
      },
      complete:() => {
        console.log("Itemit haettu?")
      },
    })
  }

  

  //HUOM: VARAA METODI ON VIELÄ PAHASTI KESKEN!!

  varaa() {

    const puhelinnumero = this.varausForm.get('puhelinnumero')?.value;
    const valittuLaite = this.varausForm.get('valittuLaite')?.value;
    const alkupaiva = this.varausForm.get('alkupaiva')?.value;
    const loppupaiva = this.varausForm.get('loppupaiva')?.value;

    console.log('Varauslomakkeen tiedot:', puhelinnumero, valittuLaite, alkupaiva, loppupaiva);


    const formattedAlku = this.dateFormatPipe.transform(alkupaiva);
    const formattedLoppu = this.dateFormatPipe.transform(loppupaiva);

    console.log('Varauksen alkuaika:', formattedAlku);
    console.log('Varauksen loppuaika:', formattedLoppu);

    const varausData = {
      target: valittuLaite,
      owner: puhelinnumero,
      startTime: formattedAlku,
      endTime: formattedLoppu
    };


    //Erottele iso metodi useammaksi pienemmäksi myöhemmin.


    console.log('Lähetetään varaus backendille:', varausData);

    this.reservationService.addReservation(varausData).subscribe({
      next: (response) => {
        console.log('Varaus lähetetty backendille', response);
        // Tee jotain, kun varaus on lähetetty onnistuneesti
        this.varausTapahtunut = true;
      },
      error: (error) => {
        console.error('Virhe varauksen lähettämisessä:', error);
        console.log(varausData);
        alert("Virhe varauksen tekemisessä. Tarkista päivämäärät.")
        // Tähän mitä tehdään, jos varauksen tekemisessä tulee virhe
      },
      complete: () => {
        console.log("Varaus tehty onnistuneesti!")
        alert("Varaus tehty onnistuneesti.")
        this.angCalendarComponent.addEvent();
      }
    });

  }


  logout() {
    this.router.navigate(['/logout']);
  }

}
