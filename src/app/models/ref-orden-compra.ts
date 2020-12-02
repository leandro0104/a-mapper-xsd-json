import { Xpath } from './xpath';

export class RefOrdenCompra {
  private idOrdenCompra: Xpath;
  private fechaOrdenCompra: Xpath;

  public getIdOrdenCompra(): Xpath {
    return this.idOrdenCompra;
  }

  public setIdOrdenCompra(idOrdenCompra: Xpath): void {
    this.idOrdenCompra = idOrdenCompra;
  }

  public getFechaOrdenCompra(): Xpath {
    return this.fechaOrdenCompra;
  }

  public setFechaOrdenCompra(fechaOrdenCompra: Xpath): void {
    this.fechaOrdenCompra = fechaOrdenCompra;
  }
}
