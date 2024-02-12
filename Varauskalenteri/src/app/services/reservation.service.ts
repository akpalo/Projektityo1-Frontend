import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'https://localhost:7142/api/Reservations'; // Korvaa osoite oikealla backendin URL:llä

  constructor(private http: HttpClient) { }

  addReservation(reservationData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': 'ASOIVNRGNRKDWIW' // Korvaa API-avain oikealla avaimella
    });
    return this.http.post(this.apiUrl, reservationData, { headers });
  }
}