import { DetalleTributario } from './detalle-tributario';
import { InfoRut } from './info-rut';
import { Xpath } from './xpath';
import { Direccion } from './direccion';
import { InfoContacto } from './info-contacto';

export class Adquiriente {

  private detalleTributario: DetalleTributario[];
  private infoRut: InfoRut;
  private nombreComercial: Xpath;
  private tipoPersona: Xpath;
  private direccion: Direccion;
  private infoContacto: InfoContacto;

  public getDetalleTributario(): DetalleTributario[] {
    return this.detalleTributario;
  }

  public setDetalleTributario(detalleTributario: DetalleTributario[]): void {
    this.detalleTributario = detalleTributario;
  }

  public getInfoRut(): InfoRut {
    return this.infoRut;
  }

  public setInfoRut(infoRut: InfoRut): void {
    this.infoRut = infoRut;
  }

  public getNombreComercial(): Xpath {
    return this.nombreComercial;
  }

  public setNombreComercial(nombreComercial: Xpath): void {
    this.nombreComercial = nombreComercial;
  }

  public getTipoPersona(): Xpath {
    return this.tipoPersona;
  }

  public setTipoPersona(tipoPersona: Xpath): void {
    this.tipoPersona = tipoPersona;
  }

  public getDireccion(): Direccion {
    return this.direccion;
  }

  public setDireccion(direccion: Direccion): void {
    this.direccion = direccion;
  }

  public getInfoContacto(): InfoContacto {
    return this.infoContacto;
  }

  public setInfoContacto(infoContacto: InfoContacto): void {
    this.infoContacto = infoContacto;
  }
}
