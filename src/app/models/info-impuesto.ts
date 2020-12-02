import { Xpath } from './xpath';

export class InfoImpuesto {
  private porcentaje: Xpath;
  private idImpuesto: Xpath;
  private nombreImpuesto: Xpath;

  public getPorcentaje(): Xpath {
    return this.porcentaje;
  }

  public setPorcentaje(porcentaje: Xpath): void {
    this.porcentaje = porcentaje;
  }

  public getIdImpuesto(): Xpath {
    return this.idImpuesto;
  }

  public setIdImpuesto(idImpuesto: Xpath): void {
    this.idImpuesto = idImpuesto;
  }

  public getNombreImpuesto(): Xpath {
    return this.nombreImpuesto;
  }

  public setNombreImpuesto(nombreImpuesto: Xpath): void {
    this.nombreImpuesto = nombreImpuesto;
  }
}
