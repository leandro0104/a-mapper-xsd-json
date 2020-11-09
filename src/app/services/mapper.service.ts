import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor(private http: HttpClient) { }

  getClients(){
    this.http.get('http://localhost:8080/listClients')
    .subscribe( data => {
      console.log(data);
    })

  }
}
