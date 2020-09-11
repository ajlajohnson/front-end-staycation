import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = 'http://localhost:3000';
  key: string = 'AIzaSyAx6C2ZoVVCy_9NNDpn4ZzzpSaFBd1FOT4';
  place_id: string = 'ChIJX80xAaIyO4gR8GDwgVUFi6I';

  constructor(private http: HttpClient) { }

  retrievePlace = () => {
    return this.http.get(`${this.baseUrl}/results`, {
      params: {
        key: this.key,
        place_id: this.place_id,
      },
    });
  };


}
