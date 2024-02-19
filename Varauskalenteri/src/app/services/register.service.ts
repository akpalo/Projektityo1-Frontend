import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'https://localhost:7142/api/Users'; // Backendin Url
  apiKey = 'ASOIVNRGNRKDWIW'; // Backendin Apikey

  constructor(private http: HttpClient) {}

  // Lisätään uusi käyttäjä tietokantaan
  registerUser(registerData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.apiKey
    });
    return this.http.post(this.apiUrl, registerData, { headers });
  }

  // Haetaan käyttäjät tietokannasta
  getUsers(): Observable<User[]> {
    const headers = new HttpHeaders({
      'apikey': this.apiKey
    });
    return this.http.get<User[]>(this.apiUrl);
  }

}
