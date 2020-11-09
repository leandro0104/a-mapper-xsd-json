import { Component, OnInit } from '@angular/core';
import { MapperService } from 'src/app/services/mapper.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private mapper: MapperService) { }

  ngOnInit(): void {
  }

}
