import { Xpath } from './xpath';

export class Opcionales {
  private descripcionOpcional: Xpath;
  private idOpcional: Xpath;
  private valorCampo: Xpath;

  public getDescripcionOpcional(): Xpath {
    return this.descripcionOpcional;
  }

  public setDescripcionOpcional(descripcionOpcional: Xpath): void {
    this.descripcionOpcional = descripcionOpcional;
  }

  public getIdOpcional(): Xpath {
    return this.idOpcional;
  }

  public setIdOpcional(idOpcional: Xpath): void {
    this.idOpcional = idOpcional;
  }

  public getValorCampo(): Xpath {
    return this.valorCampo;
  }

  public setValorCampo(valorCampo: Xpath): void {
    this.valorCampo = valorCampo;
  }
}
