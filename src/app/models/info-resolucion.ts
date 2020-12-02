import { Xpath } from './xpath';

export class InfoResolucion {
  private fechaFin: Xpath;
  private fechaInicio: Xpath;
  private numResolucion: Xpath;
  private prefijoFacturacion: Xpath;
  private rangoInicio: Xpath;
  private rangoFin: Xpath;

  public getFechaFin(): Xpath {
    return this.fechaFin;
  }

  public setFechaFin(fechaFin: Xpath): void {
    this.fechaFin = fechaFin;
  }

  public getFechaInicio(): Xpath {
    return this.fechaInicio;
  }

  public setFechaInicio(fechaInicio: Xpath): void {
    this.fechaInicio = fechaInicio;
  }

  public getNumResolucion(): Xpath {
    return this.numResolucion;
  }

  public setNumResolucion(numResolucion: Xpath): void {
    this.numResolucion = numResolucion;
  }

  public getPrefijoFacturacion(): Xpath {
    return this.prefijoFacturacion;
  }

  public setPrefijoFacturacion(prefijoFacturacion: Xpath): void {
    this.prefijoFacturacion = prefijoFacturacion;
  }

  public getRangoInicio(): Xpath {
    return this.rangoInicio;
  }

  public setRangoInicio(rangoInicio: Xpath): void {
    this.rangoInicio = rangoInicio;
  }

  public getRangoFin(): Xpath {
    return this.rangoFin;
  }

  public setRangoFin(rangoFin: Xpath): void {
    this.rangoFin = rangoFin;
  }
}
