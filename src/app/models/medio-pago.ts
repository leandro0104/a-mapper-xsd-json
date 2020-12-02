import { Xpath } from './xpath';

export class MedioPago {
  private idMedioPago: Xpath;
  private idMetodoPago: Xpath;
  private fechaVencimiento: Xpath;

  public getIdMedioPago(): Xpath {
    return this.idMedioPago;
  }

  public setIdMedioPago(idMedioPago: Xpath): void {
    this.idMedioPago = idMedioPago;
  }

  public getIdMetodoPago(): Xpath {
    return this.idMetodoPago;
  }

  public setIdMetodoPago(idMetodoPago: Xpath): void {
    this.idMetodoPago = idMetodoPago;
  }

  public getFechaVencimiento(): Xpath {
    return this.fechaVencimiento;
  }

  public setFechaVencimiento(fechaVencimiento: Xpath): void {
    this.fechaVencimiento = fechaVencimiento;
  }
}
