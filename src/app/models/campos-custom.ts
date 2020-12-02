import { Negocio } from './negocio';
import { RepresentacionGrafica } from './representacion-grafica';

export class CamposCustom {
  private negocio: Negocio;
  private representacionGrafica: RepresentacionGrafica;

  public getNegocio(): Negocio {
    return this.negocio;
  }

  public setNegocio(negocio: Negocio): void {
    this.negocio = negocio;
  }

  public getRepresentacionGrafica(): RepresentacionGrafica {
    return this.representacionGrafica;
  }

  public setRepresentacionGrafica(
    representacionGrafica: RepresentacionGrafica
  ): void {
    this.representacionGrafica = representacionGrafica;
  }
}
