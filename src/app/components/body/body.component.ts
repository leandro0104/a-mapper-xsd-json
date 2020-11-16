import { Component, OnInit } from '@angular/core';
import { MapperService } from 'src/app/services/mapper.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

  allJson: any[] = [];

  constructor(private mapper: MapperService) {
    this.mapper.getJsonFormat()
   .subscribe( (data: any) => {
      console.log(data);
      this.allJson = data;
   });
  }

  ngOnInit(): void {
  }


}
