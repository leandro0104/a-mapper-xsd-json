import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor(private http: HttpClient) {}

  getClients(){
    return this.http.get('https://run.mocky.io/v3/9b3edf82-3c0a-414a-8dee-4fd68dec9f3c');
  }

  getDocuments(){
    return this.http.get('https://run.mocky.io/v3/165f0e45-0833-4ecc-bbd1-826a1cc1bebf');
  }

  getJsonFormat(){
    return this.http.get('https://run.mocky.io/v3/13409f2e-8308-4476-9f7d-6442bab4e409');
  }

  GETXpathXML(){
    return this.http.get('https://run.mocky.io/v3/025ebd07-7dc3-4f54-8c2a-c314f9ab6e07');
  }
}
