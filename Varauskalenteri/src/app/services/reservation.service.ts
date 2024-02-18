import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation, ReservationDto } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'https://localhost:7142/api/Reservations'; // Korvaa osoite oikealla backendin URL:llä
  apiKey = 'ASOIVNRGNRKDWIW'; // Korvaa API-avain oikealla avaimella

  constructor(private http: HttpClient) { }

  addReservation(reservationData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.apiKey // Korvaa API-avain oikealla avaimella
    });
    return this.http.post(this.apiUrl, reservationData, { headers });
  }

  getReservations(): Observable<Reservation[]> {
    const headers = new HttpHeaders({
      'apikey': this.apiKey // Korvaa API-avain oikealla avaimella
    });
    return this.http.get<Reservation[]>(this.apiUrl);
  }
}