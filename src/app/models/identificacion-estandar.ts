import { Xpath } from './xpath';

export class IdentificacionEstandar {
  private codEstandarItem: Xpath;
  private tipoEstandar: Xpath;

  public getCodEstandarItem(): Xpath {
    return this.codEstandarItem;
  }

  public setCodEstandarItem(codEstandarItem: Xpath): void {
    this.codEstandarItem = codEstandarItem;
  }

  public getTipoEstandar(): Xpath {
    return this.tipoEstandar;
  }

  public setTipoEstandar(tipoEstandar: Xpath): void {
    this.tipoEstandar = tipoEstandar;
  }
}
