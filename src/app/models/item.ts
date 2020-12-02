import { Xpath } from './xpath';
import { IdentificacionEstandar } from './identificacion-estandar';

export class Item {
  private descripcion: Xpath;
  private identificacionEstandar: IdentificacionEstandar[];

  public getDescripcion(): Xpath {
    return this.descripcion;
  }

  public setDescripcion(descripcion: Xpath): void {
    this.descripcion = descripcion;
  }

  public getIdentificacionEstandar(): IdentificacionEstandar[] {
    return this.identificacionEstandar;
  }

  public setIdentificacionEstandar(
    identificacionEstandar: IdentificacionEstandar[]
  ): void {
    this.identificacionEstandar = identificacionEstandar;
  }
}
