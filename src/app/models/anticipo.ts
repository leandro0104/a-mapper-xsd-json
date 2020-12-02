import { Xpath } from './xpath';

export class Anticipo {
  private fechaPagoRecibido: Xpath;
  private idAnticipo: Xpath;
  private valorAnticipo: Xpath;
  private fechaPagoRealizado: Xpath;
  private horaPagoRealizado: Xpath;
  private notaAnticipo: Xpath;

  public getFechaPagoRecibido(): Xpath {
    return this.fechaPagoRecibido;
  }

  public setFechaPagoRecibido(fechaPagoRecibido: Xpath): void {
    this.fechaPagoRecibido = fechaPagoRecibido;
  }

  public getIdAnticipo(): Xpath {
    return this.idAnticipo;
  }

  public setIdAnticipo(idAnticipo: Xpath): void {
    this.idAnticipo = idAnticipo;
  }

  public getValorAnticipo(): Xpath {
    return this.valorAnticipo;
  }

  public setValorAnticipo(valorAnticipo: Xpath): void {
    this.valorAnticipo = valorAnticipo;
  }

  public getFechaPagoRealizado(): Xpath {
    return this.fechaPagoRealizado;
  }

  public setFechaPagoRealizado(fechaPagoRealizado: Xpath): void {
    this.fechaPagoRealizado = fechaPagoRealizado;
  }

  public getHoraPagoRealizado(): Xpath {
    return this.horaPagoRealizado;
  }

  public setHoraPagoRealizado(horaPagoRealizado: Xpath): void {
    this.horaPagoRealizado = horaPagoRealizado;
  }

  public getNotaAnticipo(): Xpath {
    return this.notaAnticipo;
  }

  public setNotaAnticipo(notaAnticipo: Xpath): void {
    this.notaAnticipo = notaAnticipo;
  }
}
