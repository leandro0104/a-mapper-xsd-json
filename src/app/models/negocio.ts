import { Xpath } from './xpath';

export class Negocio {
  private envio: Xpath;
  private adjunto: Xpath;
  private asunto: Xpath;
  private claveDocumento: Xpath;
  private emailAdquiriente: Xpath;

  public getEnvio(): Xpath {
    return this.envio;
  }

  public setEnvio(envio: Xpath): void {
    this.envio = envio;
  }

  public getAdjunto(): Xpath {
    return this.adjunto;
  }

  public setAdjunto(adjunto: Xpath): void {
    this.adjunto = adjunto;
  }

  public getAsunto(): Xpath {
    return this.asunto;
  }

  public setAsunto(asunto: Xpath): void {
    this.asunto = asunto;
  }

  public getClaveDocumento(): Xpath {
    return this.claveDocumento;
  }

  public setClaveDocumento(claveDocumento: Xpath): void {
    this.claveDocumento = claveDocumento;
  }

  public getEmailAdquiriente(): Xpath {
    return this.emailAdquiriente;
  }

  public setEmailAdquiriente(emailAdquiriente: Xpath): void {
    this.emailAdquiriente = emailAdquiriente;
  }
}
