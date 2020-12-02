import { Xpath } from './xpath';

export class TasaCambio {
  private fechaTrm: Xpath;
  private monedaDestino: Xpath;
  private monedaOrigen: Xpath;
  private valorTrm: Xpath;

  public getFechaTrm(): Xpath {
    return this.fechaTrm;
  }

  public setFechaTrm(fechaTrm: Xpath): void {
    this.fechaTrm = fechaTrm;
  }

  public getMonedaDestino(): Xpath {
    return this.monedaDestino;
  }

  public setMonedaDestino(monedaDestino: Xpath): void {
    this.monedaDestino = monedaDestino;
  }

  public getMonedaOrigen(): Xpath {
    return this.monedaOrigen;
  }

  public setMonedaOrigen(monedaOrigen: Xpath): void {
    this.monedaOrigen = monedaOrigen;
  }

  public getValorTrm(): Xpath {
    return this.valorTrm;
  }

  public setValorTrm(valorTrm: Xpath): void {
    this.valorTrm = valorTrm;
  }
}
