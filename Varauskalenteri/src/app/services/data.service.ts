import { Injectable } from '@angular/core';
import { ReservationsService } from '../api/services';
import { ReservationDto } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private reservationsService: ReservationsService) { }

  postReservation(varausData: any) {
    const reservationDto: ReservationDto = {

      target: varausData.valittuLaite,
      owner: varausData.puhelinnumero,
      startTime: varausData.alkupaiva,
      endTime: varausData.loppupaiva
    };

    return this.reservationsService.apiReservationsPost$Json({ body: reservationDto });
  }


  getReservations() {
    return this.reservationsService.apiReservationsGet$Json();
    console.log('Varaukset haettu', this.reservationsService.apiReservationsGet$Json());
  }

}
