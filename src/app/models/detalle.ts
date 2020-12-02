import { Xpath } from './xpath';
import { Item } from './item';
import { Precio } from './precio';
import { Opcionales } from './opcionales';
import { Impuesto } from './impuesto';

export class Detalle {
  private cantidadUnidades: Xpath;
  private esGratis: Xpath;
  private idLinea: Xpath;
  private item: Item;
  private nombreItem: Xpath;
  private precio: Precio;
  private unidadCantUnidades: Xpath;
  private valorLinea: Xpath;
  private opcionales: Opcionales[];
  private impuestos: Impuesto[];
  private notaDetalle: Xpath;

  public getCantidadUnidades(): Xpath {
    return this.cantidadUnidades;
  }

  public setCantidadUnidades(cantidadUnidades: Xpath): void {
    this.cantidadUnidades = cantidadUnidades;
  }

  public getEsGratis(): Xpath {
    return this.esGratis;
  }

  public setEsGratis(esGratis: Xpath): void {
    this.esGratis = esGratis;
  }

  public getIdLinea(): Xpath {
    return this.idLinea;
  }

  public setIdLinea(idLinea: Xpath): void {
    this.idLinea = idLinea;
  }

  public getItem(): Item {
    return this.item;
  }

  public setItem(item: Item): void {
    this.item = item;
  }

  public getNombreItem(): Xpath {
    return this.nombreItem;
  }

  public setNombreItem(nombreItem: Xpath): void {
    this.nombreItem = nombreItem;
  }

  public getPrecio(): Precio {
    return this.precio;
  }

  public setPrecio(precio: Precio): void {
    this.precio = precio;
  }

  public getUnidadCantUnidades(): Xpath {
    return this.unidadCantUnidades;
  }

  public setUnidadCantUnidades(unidadCantUnidades: Xpath): void {
    this.unidadCantUnidades = unidadCantUnidades;
  }

  public getValorLinea(): Xpath {
    return this.valorLinea;
  }

  public setValorLinea(valorLinea: Xpath): void {
    this.valorLinea = valorLinea;
  }

  public getOpcionales(): Opcionales[] {
    return this.opcionales;
  }

  public setOpcionales(opcionales: Opcionales[]): void {
    this.opcionales = opcionales;
  }

  public getImpuestos(): Impuesto[] {
    return this.impuestos;
  }

  public setImpuestos(impuestos: Impuesto[]): void {
    this.impuestos = impuestos;
  }

  public getNotaDetalle(): Xpath {
    return this.notaDetalle;
  }

  public setNotaDetalle(notaDetalle: Xpath): void {
    this.notaDetalle = notaDetalle;
  }
}
