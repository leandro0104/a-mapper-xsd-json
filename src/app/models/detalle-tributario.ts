import { Xpath } from './xpath';

export class DetalleTributario {
  private idTributo: Xpath;
  private nombreTributo: Xpath;

  public getIdTributo(): Xpath {
    return this.idTributo;
  }

  public setIdTributo(idTributo: Xpath): void {
    this.idTributo = idTributo;
  }

  public getNombreTributo(): Xpath {
    return this.nombreTributo;
  }

  public setNombreTributo(nombreTributo: Xpath): void {
    this.nombreTributo = nombreTributo; 
  }
}
