import { DetalleRegistro } from './detalle-registro';
import { DetalleTributario } from './detalle-tributario';
import { Direccion } from './direccion';
import { Xpath } from './xpath';

export class Obligado {
  private detalleRegistro: DetalleRegistro;
  private detalleTributario: DetalleTributario[];
  private direccionFiscal: Direccion;
  private direccionFisica: Direccion;
  private dvNitObligado: Xpath;
  private idObligado: Xpath;
  private nombreComercial: Xpath;
  private razonSocial: Xpath;
  private responsabilidadesObligado: Xpath;
  private tipoIdObligado: Xpath;
  private tipoPersona: Xpath;
  private tipoRegimen: Xpath;
  private codigoCiiu: Xpath;

  public getDetalleRegistro(): DetalleRegistro {
    return this.detalleRegistro;
  }

  public setDetalleRegistro(detalleRegistro: DetalleRegistro): void {
    this.detalleRegistro = detalleRegistro;
  }

  public getDetalleTributario(): DetalleTributario[] {
    return this.detalleTributario;
  }

  public setDetalleTributario(detalleTributario: DetalleTributario[]): void {
    this.detalleTributario = detalleTributario;
  }

  public getDireccionFiscal(): Direccion {
    return this.direccionFiscal;
  }

  public setDireccionFiscal(direccionFiscal: Direccion): void {
    this.direccionFiscal = direccionFiscal;
  }

  public getDireccionFisica(): Direccion {
    return this.direccionFisica;
  }

  public setDireccionFisica(direccionFisica: Direccion): void {
    this.direccionFisica = direccionFisica;
  }

  public getDvNitObligado(): Xpath {
    return this.dvNitObligado;
  }

  public setDvNitObligado(dvNitObligado: Xpath): void {
    this.dvNitObligado = dvNitObligado;
  }

  public getIdObligado(): Xpath {
    return this.idObligado;
  }

  public setIdObligado(idObligado: Xpath): void {
    this.idObligado = idObligado;
  }

  public getNombreComercial(): Xpath {
    return this.nombreComercial;
  }

  public setNombreComercial(nombreComercial: Xpath): void {
    this.nombreComercial = nombreComercial;
  }

  public getRazonSocial(): Xpath {
    return this.razonSocial;
  }

  public setRazonSocial(razonSocial: Xpath): void {
    this.razonSocial = razonSocial;
  }

  public getResponsabilidadesObligado(): Xpath {
    return this.responsabilidadesObligado;
  }

  public setResponsabilidadesObligado(responsabilidadesObligado: Xpath): void {
    this.responsabilidadesObligado = responsabilidadesObligado;
  }

  public getTipoIdObligado(): Xpath {
    return this.tipoIdObligado;
  }

  public setTipoIdObligado(tipoIdObligado: Xpath): void {
    this.tipoIdObligado = tipoIdObligado;
  }

  public getTipoPersona(): Xpath {
    return this.tipoPersona;
  }

  public setTipoPersona(tipoPersona: Xpath): void {
    this.tipoPersona = tipoPersona;
  }

  public getTipoRegimen(): Xpath {
    return this.tipoRegimen;
  }

  public setTipoRegimen(tipoRegimen: Xpath): void {
    this.tipoRegimen = tipoRegimen;
  }

  public getCodigoCiiu(): Xpath {
    return this.codigoCiiu;
  }

  public setCodigoCiiu(codigoCiiu: Xpath): void {
    this.codigoCiiu = codigoCiiu;
  }
}
