import { Xpath } from './xpath';

export class RefDocRecibo {
  private idDocRecibo: Xpath;
  private fechaDocRecibo: Xpath;

  public getIdDocRecibo(): Xpath {
    return this.idDocRecibo;
  }

  public setIdDocRecibo(idDocRecibo: Xpath): void {
    this.idDocRecibo = idDocRecibo;
  }

  public getFechaDocRecibo(): Xpath {
    return this.fechaDocRecibo;
  }

  public setFechaDocRecibo(fechaDocRecibo: Xpath): void {
    this.fechaDocRecibo = fechaDocRecibo;
  }
}
