import { Xpath } from './xpath';

export class AutorizadoDescargar {
  private idAutorizado: Xpath;
  private tipoIdAutorizado: Xpath;
  private dvAutorizado: Xpath;

  public getIdAutorizado(): Xpath {
    return this.idAutorizado;
  }

  public setIdAutorizado(idAutorizado: Xpath): void {
    this.idAutorizado = idAutorizado;
  }

  public getTipoIdAutorizado(): Xpath {
    return this.tipoIdAutorizado;
  }

  public setTipoIdAutorizado(tipoIdAutorizado: Xpath): void {
    this.tipoIdAutorizado = tipoIdAutorizado;
  }

  public getDvAutorizado(): Xpath {
    return this.dvAutorizado;
  }

  public setDvAutorizado(dvAutorizado: Xpath): void {
    this.dvAutorizado = dvAutorizado;
  }
}
