import { Component, OnInit, Inject } from '@angular/core';
import { MapperService } from 'src/app/services/mapper.service';
import { JSONEditor } from '@json-editor/json-editor';
import { DOCUMENT } from '@angular/common';
import jsonTemplate from '../../../assets/jsonTemplate.json';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { requiredFileType } from '../../utils/upload-file-validators';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {

  mapperForm: FormGroup;
  jsonEditor: any;
  clientList: any[];
  documentList: any[];
  xpathList: any[];

  jsonFinal: any = {};
  xsdFile: any = File;

  constructor(
    @Inject(DOCUMENT) document,
    private mapperService: MapperService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadFormData();
    this.mapperForm = this.formBuilder.group({
      cliente: ['', [Validators.required]],
      tipoDocumento: ['', [Validators.required]],
      xsdFile: ['', [Validators.required, requiredFileType('xsd')]],
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
    /*
    this.mapperService.getXpathXML().subscribe(
      (res: any) => {
        this.xpathList = res;
      },
      (err: any) => {
        console.error('loadFormData()', err);
      }
    );
    */
  }

  onFileChange(event: any): void {
    if (event.target.files[0]) {
      //const { name } = event.target.files[0];
      //this.xsdFile = name;
      this.xsdFile = event.target.files[0];

      let fileData = new FormData();
      fileData.append('file', this.xsdFile);
      this.mapperService.obtainXpath( fileData ).subscribe(
        (res: any) => {
          this.xpathList = res;
          console.log('xpathList', this.xpathList);
        },
        (err: any) => {
          console.error('loadFormData()', err);
        }
      );
    }
  }

  cargar() {
    /*this.idObligadoSeleccionado = this.forma.get('cliente').value;
    this.idDocumentoSeleccionado = this.forma.get('tipoDoc').value;
    this.Servicio.consultarDatos(this.idObligadoSeleccionado, this.idDocumentoSeleccionado)*/
  console.log(this.mapperForm);
  }


  cargarDatos(): any {
    const editorElem = document.getElementById('json-editor-body');
    jsonTemplate.definitions.etiquetasSelect.enum = [];
    console.log('xpathList', this.xpathList);
    jsonTemplate.definitions.etiquetasSelect.enum = this.xpathList;
    JSONEditor.defaults.options.theme = 'bootstrap4';
    JSONEditor.defaults.options.iconlib = 'fontawesome5'; //'foundation2';
    JSONEditor.defaults.options.display_required_only = true;
    JSONEditor.defaults.options.compact = true;
    JSONEditor.defaults.options.no_additional_properties = true;
    JSONEditor.defaults.options.disable_edit_json = true;
    JSONEditor.defaults.options.disable_array_reorder = true;
    if (this.jsonEditor == null) {
      this.jsonEditor = new JSONEditor(editorElem, {
        schema: jsonTemplate,
      });
    }
    // Se usa para setear los valores que trae la configuracion en el formulario
    this.setJsonEditor();

    // Nos entrega el json final
    this.jsonFinal = this.jsonEditor.getValue();
  }

  // Funcion que va seteando el nuevo contenido al jsonFinal segun cada click que se haga en el html
  setJson() {
    this.jsonFinal = this.jsonEditor.getValue();
  }


  // Metodo que alberga toda la configuracion json que se debe cargar, en caso de estar vacio no hacer nada, se debe llamar al servicio
  setJsonEditor() {
    this.jsonEditor.setValue({
      "numDocumento": {
        "xPath": "/BILL_INFO/XML_INFO/RELEASE"
      },
      "tipoDocElect": {
        "xPath": "/BILL_INFO/XML_INFO/RELEASE"
      },
      "adquirientes": [
        {
          "detalleTributario": [
            {
              "idTributo": {
                "xPath": "/BILL_INFO/XML_INFO/RELEASE"
              },
              "nombreTributo": {
                "xPath": "/BILL_INFO/XML_INFO/RELEASE"
              }
            }
          ],
          "infoRut": {
            "identificacion": {
              "xPath": "/BILL_INFO/XML_INFO/RELEASE"
            },
            "nombre": {
              "xPath": "/BILL_INFO/XML_INFO/RELEASE"
            },
            "responsabilidades": {
              "xPath": "/BILL_INFO/XML_INFO/RELEASE"
            },
            "tipoIdentificacion": {
              "xPath": "/BILL_INFO/XML_INFO/RELEASE"
            },
            "tipoRegimen": {
              "xPath": "/BILL_INFO/XML_INFO/RELEASE"
            }
          },
          "nombreComercial": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          },
          "tipoPersona": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          }
        }
      ],
      "cabeceraFactura": {
        "ambiente": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "cantidadDetalles": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "fechaEmision": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "horaEmision": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "monedaDocumento": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "operacion": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "uuid": {
          "uuid": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          },
          "uuidType": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          }
        }
      },
      "detalles": [
        {
          "cantidadUnidades": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          },
          "esGratis": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE",
            "verdaderoCuando": "true"
          },
          "idLinea": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          },
          "item": {
            "descripcion": {
              "xPath": "/BILL_INFO/XML_INFO/RELEASE"
            },
            "identificacionEstandar": [
              {
                "codEstandarItem": {
                  "xPath": "/BILL_INFO/XML_INFO/RELEASE"
                },
                "tipoEstandar": {
                  "xPath": "/BILL_INFO/XML_INFO/RELEASE"
                }
              }
            ]
          },
          "nombreItem": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          },
          "precio": {
            "valorUnidad": {
              "xPath": "/BILL_INFO/XML_INFO/RELEASE"
            },
            "cantUnidAplicaPrecio": {
              "xPath": "/BILL_INFO/XML_INFO/RELEASE"
            },
            "unidadCantArticulos": {
              "xPath": "/BILL_INFO/XML_INFO/RELEASE"
            }
          },
          "unidadCantUnidades": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          },
          "valorLinea": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          }
        }
      ],
      "obligado": {
        "detalleRegistro": {
          "prefijoFacturacion": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          }
        },
        "detalleTributario": [
          {
            "idTributo": {
              "xPath": "/BILL_INFO/XML_INFO/RELEASE"
            },
            "nombreTributo": {
              "xPath": "/BILL_INFO/XML_INFO/RELEASE"
            }
          }
        ],
        "direccionFiscal": {
          "codigoDepto": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          },
          "codigoMunicipio": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          },
          "codigoPais": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          },
          "codigoPostal": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          }
        },
        "direccionFisica": {
          "codigoDepto": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          },
          "codigoMunicipio": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          },
          "codigoPais": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          },
          "codigoPostal": {
            "xPath": "/BILL_INFO/XML_INFO/RELEASE"
          }
        },
        "dvNitObligado": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "idObligado": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "nombreComercial": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "razonSocial": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "responsabilidadesObligado": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "tipoIdObligado": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "tipoPersona": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "tipoRegimen": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        }
      },
      "totales": {
        "totalAntesImp": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "totalBaseImponible": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "totalDespuesImp": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "valorPagar": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        }
      },
      "anticipos": [],
      "autorizadoDescargar": {
        "idAutorizado": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        },
        "tipoIdAutorizado": {
          "xPath": "/BILL_INFO/XML_INFO/RELEASE"
        }
      }
    });
  }

}
