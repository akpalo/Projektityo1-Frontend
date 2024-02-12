import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationService } from '../services/reservation.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Router } from '@angular/router';

interface Item {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-varaus',
  templateUrl: './varaus.component.html',
  styleUrls: ['./varaus.component.css']
})

export class VarausComponent {

  resItems: Item[] = [
    { value: '1', viewValue: 'Kamera' },
    { value: '2', viewValue: 'Valo' },
    { value: '3', viewValue: 'Green screen' },
  ];

  varausForm: FormGroup;
  varausTapahtunut = false;

  constructor(private router: Router,private fb: FormBuilder, private reservationService: ReservationService) {
    this.varausForm = this.fb.group({
      puhelinnumero: ['', Validators.required],
      valittuLaite: ['', Validators.required],
      alkupaiva: [null], // Alkupäivän form control
      loppupaiva: [null] // Loppupäivän form control
    });
  }

  //HUOM: VARAA METODI ON VIELÄ PAHASTI KESKEN!!
  varaa() {
    const puhelinnumero = this.varausForm.get('puhelinnumero')?.value;
    const valittuLaite = this.varausForm.get('valittuLaite')?.value;
    const alkupaiva = this.varausForm.get('alkupaiva')?.value;
    const loppupaiva = this.varausForm.get('loppupaiva')?.value;

    const varausData = {
      owner: puhelinnumero,
      target: valittuLaite,
      startTime: alkupaiva,
      endTime: loppupaiva
    };

    this.reservationService.addReservation(varausData).subscribe({
      next: (response) => {
        console.log('Varaus lähetetty backendille', response);
        // Tee jotain, kun varaus on lähetetty onnistuneesti
        this.varausTapahtunut = true;
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

  
  logout() {
    this.router.navigate(['/logout']);
  }
  
}
