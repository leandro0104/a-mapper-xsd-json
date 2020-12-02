import { Xpath } from './xpath';
import { Direccion } from './direccion';

export class InfoRut {
  private identificacion: Xpath;
  private nombre: Xpath;
  private responsabilidades: Xpath;
  private tipoIdentificacion: Xpath;
  private tipoRegimen: Xpath;
  private dvNit: Xpath;
  private direccion: Direccion;
  private matriculaMercantil: Xpath;

  public getIdentificacion(): Xpath {
    return this.identificacion;
  }

  public setIdentificacion(identificacion: Xpath): void {
    this.identificacion = identificacion;
  }

  public getNombre(): Xpath {
    return this.nombre;
  }

  public setNombre(nombre: Xpath): void {
    this.nombre = nombre;
  }

  public getResponsabilidades(): Xpath {
    return this.responsabilidades;
  }

  public setResponsabilidades(responsabilidades: Xpath): void {
    this.responsabilidades = responsabilidades;
  }

  public getTipoIdentificacion(): Xpath {
    return this.tipoIdentificacion;
  }

  public setTipoIdentificacion(tipoIdentificacion: Xpath): void {
    this.tipoIdentificacion = tipoIdentificacion;
  }

  public getTipoRegimen(): Xpath {
    return this.tipoRegimen;
  }

  public setTipoRegimen(tipoRegimen: Xpath): void {
    this.tipoRegimen = tipoRegimen;
  }

  public getDvNit(): Xpath {
    return this.dvNit;
  }

  public setDvNit(dvNit: Xpath): void {
    this.dvNit = dvNit;
  }

  public getDireccion(): Direccion {
    return this.direccion;
  }

  public setDireccion(direccion: Direccion): void {
    this.direccion = direccion;
  }

  public getMatriculaMercantil(): Xpath {
    return this.matriculaMercantil;
  }

  public setMatriculaMercantil(matriculaMercantil: Xpath): void {
    this.matriculaMercantil = matriculaMercantil;
  }
}
