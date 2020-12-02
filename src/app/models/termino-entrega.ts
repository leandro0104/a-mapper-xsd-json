import { Xpath } from './xpath';

export class TerminoEntrega {
  private condicionEntrega: Xpath;
  private idLinea: Xpath;
  private metodoPagoTransporte: Xpath;

  public getCondicionEntrega(): Xpath {
    return this.condicionEntrega;
  }

  public setCondicionEntrega(condicionEntrega: Xpath): void {
    this.condicionEntrega = condicionEntrega;
  }

  public getIdLinea(): Xpath {
    return this.idLinea;
  }

  public setIdLinea(idLinea: Xpath): void {
    this.idLinea = idLinea;
  }

  public getMetodoPagoTransporte(): Xpath {
    return this.metodoPagoTransporte;
  }

  public setMetodoPagoTransporte(metodoPagoTransporte: Xpath): void {
    this.metodoPagoTransporte = metodoPagoTransporte;
  }
}
