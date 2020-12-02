import { Xpath } from './xpath';

export class Totales {
  private totalAntesImp: Xpath;
  private totalBaseImponible: Xpath;
  private totalDespuesImp: Xpath;
  private valorPagar: Xpath;
  private totalAnticipo: Xpath;
  private totalCargo: Xpath;
  private totalDescuento: Xpath;

  public getTotalAntesImp(): Xpath {
    return this.totalAntesImp;
  }

  public setTotalAntesImp(totalAntesImp: Xpath): void {
    this.totalAntesImp = totalAntesImp;
  }

  public getTotalBaseImponible(): Xpath {
    return this.totalBaseImponible;
  }

  public setTotalBaseImponible(totalBaseImponible: Xpath): void {
    this.totalBaseImponible = totalBaseImponible;
  }

  public getTotalDespuesImp(): Xpath {
    return this.totalDespuesImp;
  }

  public setTotalDespuesImp(totalDespuesImp: Xpath): void {
    this.totalDespuesImp = totalDespuesImp;
  }

  public getValorPagar(): Xpath {
    return this.valorPagar;
  }

  public setValorPagar(valorPagar: Xpath): void {
    this.valorPagar = valorPagar;
  }

  public getTotalAnticipo(): Xpath {
    return this.totalAnticipo;
  }

  public setTotalAnticipo(totalAnticipo: Xpath): void {
    this.totalAnticipo = totalAnticipo;
  }

  public getTotalCargo(): Xpath {
    return this.totalCargo;
  }

  public setTotalCargo(totalCargo: Xpath): void {
    this.totalCargo = totalCargo;
  }

  public getTotalDescuento(): Xpath {
    return this.totalDescuento;
  }

  public setTotalDescuento(totalDescuento: Xpath): void {
    this.totalDescuento = totalDescuento;
  }
}
