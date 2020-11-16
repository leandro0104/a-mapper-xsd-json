import { Component, OnInit } from '@angular/core';
import { MapperService } from 'src/app/services/mapper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allClients: any[] = [];
  allDocuments: any[] = [];

  constructor(private mapper: MapperService) {
    this.mapper.getClients()
   .subscribe( (data: any) => {
      console.log(data);
      this.allClients = data;
   });

    this.mapper.getDocuments()
   .subscribe( (data: any) => {
     console.log(data);
     this.allDocuments = data;
   });

  }

  ngOnInit(): void {
  }

}
