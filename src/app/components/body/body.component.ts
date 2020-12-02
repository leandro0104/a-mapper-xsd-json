import { Component, OnInit, Inject } from '@angular/core';
import { MapperService } from 'src/app/services/mapper.service';
import { JSONEditor} from '@json-editor/json-editor';
import { DOCUMENT } from '@angular/common';
import jsonTemplate from '../../../assets/jsonTemplate.json';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

  mySchema: any;
  jsonEditor: any;
  allXpath: any[] = [];
  private doc: any;
  allClients: any[] = [];
  allDocuments: any[] = [];

  constructor(@Inject(DOCUMENT) document, private mapper: MapperService) {

    this.mapper.getClients()
   .subscribe( (data: any) => {
      //console.log(data);
      this.allClients = data;
   });

    this.mapper.getDocuments()
   .subscribe( (data: any) => {
     //console.log(data);
     this.allDocuments = data;
   });

    this.doc = document;
    this.mapper.GETXpathXML()
   .subscribe((data: any) => {
     //console.log(data);
     this.allXpath = data;
   });

  }

  ngOnInit(): void {
  }

  cargarDatos() {
    console.time();
    const editorElem = document.getElementById('json-editor-body');
    jsonTemplate.definitions.etiquetasSelect.enum = [];
    jsonTemplate.definitions.etiquetasSelect.enum = this.allXpath;
    JSONEditor.defaults.options.theme = 'bootstrap4';
    JSONEditor.defaults.options.iconlib = 'fontawesome5'; //'foundation2';
    JSONEditor.defaults.options.show_errors = 'Always';
    JSONEditor.defaults.options['display_required_only'] = true;
    JSONEditor.defaults.options.compact = true;
    JSONEditor.defaults.options.no_additional_properties = true;
    JSONEditor.defaults.options.disable_edit_json = true;
    JSONEditor.defaults.options.disable_array_reorder = true;
    this.jsonEditor = new JSONEditor(editorElem, {
      schema: jsonTemplate
    });

    //console.timeEnd();
    this.mapper.getJsonFormat().subscribe((data: any) => {
    });
  }








}
