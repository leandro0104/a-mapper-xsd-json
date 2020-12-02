import { Xpath } from './xpath';

export class RefOtroDocumento {
  private numDocumento: Xpath;
  private tipoDocumento: Xpath;
  private fechaEmision: Xpath;

  public getNumDocumento(): Xpath {
    return this.numDocumento;
  }

  public setNumDocumento(numDocumento: Xpath): void {
    this.numDocumento = numDocumento;
  }

  public getTipoDocumento(): Xpath {
    return this.tipoDocumento;
  }

  public setTipoDocumento(tipoDocumento: Xpath): void {
    this.tipoDocumento = tipoDocumento;
  }

  public getFechaEmision(): Xpath {
    return this.fechaEmision;
  }

  public setFechaEmision(fechaEmision: Xpath): void {
    this.fechaEmision = fechaEmision;
  }
}
