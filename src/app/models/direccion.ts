import { Xpath } from './xpath';

export class Direccion {

  private codigoDepto: Xpath;
  private codigoMunicipio: Xpath;
  private codigoPais: Xpath;
  private codigoPostal: Xpath;
  private direccionTexto: Xpath;
  private nombreCiudad: Xpath;
  private nombreDepto: Xpath;
  private nombrePais: Xpath;

  public getCodigoDepto(): Xpath {
    return this.codigoDepto;
  }

  public setCodigoDepto(codigoDepto: Xpath): void {
    this.codigoDepto = codigoDepto;
  }

  public getCodigoMunicipio(): Xpath {
    return this.codigoMunicipio;
  }

  public setCodigoMunicipio(codigoMunicipio: Xpath): void {
    this.codigoMunicipio = codigoMunicipio;
  }

  public getCodigoPais(): Xpath {
    return this.codigoPais;
  }

  public setCodigoPais(codigoPais: Xpath): void {
    this.codigoPais = codigoPais;
  }

  public getCodigoPostal(): Xpath {
    return this.codigoPostal;
  }

  public setCodigoPostal(codigoPostal: Xpath): void {
    this.codigoPostal = codigoPostal;
  }

  public getDireccionTexto(): Xpath {
    return this.direccionTexto;
  }

  public setDireccionTexto(direccionTexto: Xpath): void {
    this.direccionTexto = direccionTexto;
  }

  public getNombreCiudad(): Xpath {
    return this.nombreCiudad;
  }

  public setNombreCiudad(nombreCiudad: Xpath): void {
    this.nombreCiudad = nombreCiudad;
  }

  public getNombreDepto(): Xpath {
    return this.nombreDepto;
  }

  public setNombreDepto(nombreDepto: Xpath): void {
    this.nombreDepto = nombreDepto;
  }

  public getNombrePais(): Xpath {
    return this.nombrePais;
  }

  public setNombrePais(nombrePais: Xpath): void {
    this.nombrePais = nombrePais;
  }

}