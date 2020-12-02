import { Xpath } from './xpath';

export class RefDocDespacho {
  private idDocDespacho: Xpath;
  private fechaDocDespacho: Xpath;

  public getIdDocDespacho(): Xpath {
    return this.idDocDespacho;
  }

  public setIdDocDespacho(idDocDespacho: Xpath): void {
    this.idDocDespacho = idDocDespacho;
  }

  public getFechaDocDespacho(): Xpath {
    return this.fechaDocDespacho;
  }

  public setFechaDocDespacho(fechaDocDespacho: Xpath): void {
    this.fechaDocDespacho = fechaDocDespacho;
  }
}
