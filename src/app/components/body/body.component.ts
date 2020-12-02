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
  jsonFinal: any = {};
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

    this.setJsonEditor();
    this.jsonFinal = this.jsonEditor.getValue();
    //console.timeEnd();
    this.mapper.getJsonFormat().subscribe((data: any) => {
    });
  }

// Funcion que va seteando el nuevo contenido al jsonFinal segun cada click que se haga en el html
  setJson(){
    this.jsonFinal = this.jsonEditor.getValue();
  }

  setJsonEditor(){
    this.jsonEditor.setValue({
      "numDocumento": {
        "xPath": "/BILL_INFO/OPER_INFO/OPER_ADDR/ADDR2"
      },
      "tipoDocElect": {
        "xPath": "/BILL_INFO/OPER_INFO/OPER_ADDR"
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
        },
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
            "xPath": "/BILL_INFO/OPER_INFO/OPER_ADDR/MUNCIPAL"
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
      "anticipos": []
    });
  }




}
