import { Xpath } from './xpath';

export class Precio {
  private valorUnidad: Xpath;
  private cantUnidAplicaPrecio: Xpath;
  private unidadCantArticulos: Xpath;

  public getValorUnidad(): Xpath {
    return this.valorUnidad;
  }

  public setValorUnidad(valorUnidad: Xpath): void {
    this.valorUnidad = valorUnidad;
  }

  public getCantUnidAplicaPrecio(): Xpath {
    return this.cantUnidAplicaPrecio;
  }

  public setCantUnidAplicaPrecio(cantUnidAplicaPrecio: Xpath): void {
    this.cantUnidAplicaPrecio = cantUnidAplicaPrecio;
  }

  public getUnidadCantArticulos(): Xpath {
    return this.unidadCantArticulos;
  }

  public setUnidadCantArticulos(unidadCantArticulos: Xpath): void {
    this.unidadCantArticulos = unidadCantArticulos;
  }
}
