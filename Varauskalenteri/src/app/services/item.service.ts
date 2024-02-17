import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item, ItemDto } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://localhost:7142/api/Items'; // Korvaa osoite oikealla backendin URL:llä
  apiKey = 'ASOIVNRGNRKDWIW'; 

  constructor(private http: HttpClient) { }

  getItem(): Observable<Item[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.apiKey
    });
    return this.http.get<Item[]>(this.apiUrl);
  }
}