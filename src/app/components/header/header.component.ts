import { Component, OnInit } from '@angular/core';
import { MapperService } from 'src/app/services/mapper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private mapper: MapperService) {
  }

  ngOnInit(): void {
  }

}
