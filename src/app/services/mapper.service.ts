import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor(private http: HttpClient) {
    console.log('Servicio Mapper Listo');
   }

  getClients(){
    return this.http.get('https://run.mocky.io/v3/9b3edf82-3c0a-414a-8dee-4fd68dec9f3c');
  }

  getDocuments(){
    return this.http.get('https://run.mocky.io/v3/165f0e45-0833-4ecc-bbd1-826a1cc1bebf');
  }

  getJsonFormat(){
    return this.http.get('https://run.mocky.io/v3/80edf28b-80bb-4fe8-9541-6cd8c576583b');
  }
}
