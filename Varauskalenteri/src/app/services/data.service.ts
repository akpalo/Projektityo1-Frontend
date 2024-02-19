import { Injectable } from '@angular/core';
import { ReservationsService } from '../api/services';
import { ReservationDto } from '../api/models';
import { ItemsService } from '../api/services';
import { ItemDto } from '../api/models';
import { Observable } from 'rxjs';
import { Item } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private reservationsService: ReservationsService, private itemsService: ItemsService) { }

  postReservation(varausData: any) {
    const reservationDto: ReservationDto = {

      target: varausData.valittuLaite,
      owner: varausData.puhelinnumero,
      startTime: varausData.alkupaiva,
      endTime: varausData.loppupaiva
    };

    return this.reservationsService.apiReservationsPost$Json({ body: reservationDto });
  }

    /*getItems(): Observable<ItemDto[]> {
      return this.itemsService.apiItemsGet$Json();
    }*/
    getItems() {
      return this.itemsService.apiItemsGet$Json();
    }


  getReservations() {
    return this.reservationsService.apiReservationsGet$Json();
    console.log('Varaukset haettu', this.reservationsService.apiReservationsGet$Json());
  }

}
