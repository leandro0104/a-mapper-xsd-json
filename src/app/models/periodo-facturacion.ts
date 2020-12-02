import { Xpath } from './xpath';

export class PeriodoFacturacion {
  private fechaInicio: Xpath;
  private fechaFin: Xpath;
  private horaInicio: Xpath;
  private horaFin: Xpath;

  public getFechaInicio(): Xpath {
    return this.fechaInicio;
  }

  public setFechaInicio(fechaInicio: Xpath): void {
    this.fechaInicio = fechaInicio;
  }

  public getFechaFin(): Xpath {
    return this.fechaFin;
  }

  public setFechaFin(fechaFin: Xpath): void {
    this.fechaFin = fechaFin;
  }

  public getHoraInicio(): Xpath {
    return this.horaInicio;
  }

  public setHoraInicio(horaInicio: Xpath): void {
    this.horaInicio = horaInicio;
  }

  public getHoraFin(): Xpath {
    return this.horaFin;
  }

  public setHoraFin(horaFin: Xpath): void {
    this.horaFin = horaFin;
  }
}
