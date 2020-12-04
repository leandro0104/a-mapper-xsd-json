import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor(private http: HttpClient) {}

  // Metodo listar clientes que llama al metodo
  getClients(){
    return this.http.get('https://run.mocky.io/v3/9b3edf82-3c0a-414a-8dee-4fd68dec9f3c');
    // return this.http.get('http://localhost:8080/listClients');
  }

  getDocuments(){
    return this.http.get('https://run.mocky.io/v3/165f0e45-0833-4ecc-bbd1-826a1cc1bebf');
    // return this.http.get('http://localhost:8080/listDocuments');
  }

  // Metodo Mock provisorio
  getXpathXML(){
    return this.http.get('https://run.mocky.io/v3/025ebd07-7dc3-4f54-8c2a-c314f9ab6e07');
  }

  obtainXpath(formData: FormData){
     return this.http.post('http://localhost:8080/upload', formData);
  }

}
