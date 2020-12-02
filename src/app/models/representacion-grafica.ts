import { Opcionales } from './opcionales';
import { Xpath } from './xpath';
import { CodigoQr } from './codigo-qr';

export class RepresentacionGrafica {
  private opcionales: Opcionales[];
  private tipoEstablecimiento: Xpath;
  private codigoQR: CodigoQr[];
  private nombreVendedor: Xpath;
  private totalesOpcional: CodigoQr[];

  public getOpcionales(): Opcionales[] {
    return this.opcionales;
  }

  public setOpcionales(opcionales: Opcionales[]): void {
    this.opcionales = opcionales;
  }

  public getTipoEstablecimiento(): Xpath {
    return this.tipoEstablecimiento;
  }

  public setTipoEstablecimiento(tipoEstablecimiento: Xpath): void {
    this.tipoEstablecimiento = tipoEstablecimiento;
  }

  public getCodigoQR(): CodigoQr[] {
    return this.codigoQR;
  }

  public setCodigoQR(codigoQR: CodigoQr[]): void {
    this.codigoQR = codigoQR;
  }

  public getNombreVendedor(): Xpath {
    return this.nombreVendedor;
  }

  public setNombreVendedor(nombreVendedor: Xpath): void {
    this.nombreVendedor = nombreVendedor;
  }

  public getTotalesOpcional(): CodigoQr[] {
    return this.totalesOpcional;
  }

  public setTotalesOpcional(totalesOpcional: CodigoQr[]): void {
    this.totalesOpcional = totalesOpcional;
  }
}
