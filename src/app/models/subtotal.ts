import { Xpath } from './xpath';
import { InfoImpuesto } from './info-impuesto';

export class Subtotal {
  private baseImponible: Xpath;
  private infoImpuesto: InfoImpuesto;
  private valorImpuesto: Xpath;

  public getBaseImponible(): Xpath {
    return this.baseImponible;
  }

  public setBaseImponible(baseImponible: Xpath): void {
    this.baseImponible = baseImponible;
  }

  public getInfoImpuesto(): InfoImpuesto {
    return this.infoImpuesto;
  }

  public setInfoImpuesto(infoImpuesto: InfoImpuesto): void {
    this.infoImpuesto = infoImpuesto;
  }

  public getValorImpuesto(): Xpath {
    return this.valorImpuesto;
  }

  public setValorImpuesto(valorImpuesto: Xpath): void {
    this.valorImpuesto = valorImpuesto;
  }
}
