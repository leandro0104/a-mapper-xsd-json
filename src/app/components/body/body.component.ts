import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MapperService } from 'src/app/services/mapper.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

  forma: FormGroup;

  allJson: any = {};
  allXpath: any[] = [];

  constructor(private mapper: MapperService, private fb: FormBuilder) {

    this.createFormulario();

    this.mapper.getJsonFormat()
   .subscribe( (data: any) => {
      console.log(data);
      this.allJson = data;
   });

    this.mapper.GETXpathXML()
   .subscribe((data: any) => {
     console.log(data);
     this.allXpath = data;
   });
  }

  ngOnInit(): void {
  }

  createFormulario(){

    this.forma = this.fb.group({
      numdoc: [],
      tipoDocElect: [],
      adquirientes: [],
    });

  }

  guardar(){
    console.log(this.forma);
  }

}
