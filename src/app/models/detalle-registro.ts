import { Xpath } from './xpath';

export class DetalleRegistro {
  private prefijoFacturacion: Xpath;
  private matriculaMercantil: Xpath;

  public getPrefijoFacturacion(): Xpath {
    return this.prefijoFacturacion;
  }

  public setPrefijoFacturacion(prefijoFacturacion: Xpath): void {
    this.prefijoFacturacion = prefijoFacturacion;
  }

  public getMatriculaMercantil(): Xpath {
    return this.matriculaMercantil;
  }

  public setMatriculaMercantil(matriculaMercantil: Xpath): void {
    this.matriculaMercantil = matriculaMercantil;
  }
}
