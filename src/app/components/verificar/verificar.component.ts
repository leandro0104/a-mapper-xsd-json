import { Component, OnInit } from '@angular/core';
import { MapperService } from 'src/app/services/mapper.service';
import { requiredFileType } from '../../utils/upload-file-validators';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.component.html',
  styleUrls: ['./verificar.component.css'],
})
export class VerificarComponent implements OnInit {

  verificarForm: FormGroup;
  clientList: any[];
  documentList: any[];
  mapperForm: FormGroup;
  jsonEditor: any;
  xpathList: any[];
  jsonFinal: any = {};
  xmlFile: any = File;
  xmlData : any;

  constructor(
    private mapperService: MapperService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadFormData();
    this.verificarForm = this.formBuilder.group({
      cliente: ['', [Validators.required]],
      tipoDocumento: ['', [Validators.required]],
      xmlFile: ['', [Validators.required, requiredFileType('xml')]],
    });
  }

  loadFormData(): void {
    this.mapperService.getClients().subscribe(
      (res: any) => {
        this.clientList = res;
      },
      (err: any) => {
        console.error('loadFormData()', err);
      }
    );
    this.mapperService.getDocuments().subscribe(
      (res: any) => {
        this.documentList = res;
      },
      (err: any) => {
        console.error('loadFormData()', err);
      }
    );
  }

  onFileChange(event: any): void {
    if (event.target.files[0]) {
      this.xmlFile = event.target.files[0];
      let fileData = new FormData();
      fileData.append('file', this.xmlFile);
      this.mapperService.obtainXml( fileData ).subscribe(
        (res: any) => {
          this.xmlData = res;
          console.log('obtainXml', this.xpathList);
        },
        (err: any) => {
          console.error('obtainXml()', err);
        }
      );
    }
  }

  setJson(): void {}

  cargar():void{

  }

  verificarMapeo():void{
    console.log(this.xmlFile)
  }
  
}
