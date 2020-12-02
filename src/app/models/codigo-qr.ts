import { Xpath } from './xpath';

export class CodigoQr {
  private identificador: Xpath;
  private valor: Xpath;

  public getIdentificador(): Xpath {
    return this.identificador;
  }

  public setIdentificador(identificador: Xpath): void {
    this.identificador = identificador;
  }

  public getValor(): Xpath {
    return this.valor;
  }

  public setValor(valor: Xpath): void {
    this.valor = valor;
  }
}
