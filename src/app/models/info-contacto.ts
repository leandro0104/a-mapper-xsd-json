import { Xpath } from './xpath';

export class InfoContacto {
  private email: Xpath;
  private nombreContacto: Xpath;
  private notaContacto: Xpath;
  private telefax: Xpath;
  private telefono: Xpath;

  public getEmail(): Xpath {
    return this.email;
  }

  public setEmail(email: Xpath): void {
    this.email = email;
  }

  public getNombreContacto(): Xpath {
    return this.nombreContacto;
  }

  public setNombreContacto(nombreContacto: Xpath): void {
    this.nombreContacto = nombreContacto;
  }

  public getNotaContacto(): Xpath {
    return this.notaContacto;
  }

  public setNotaContacto(notaContacto: Xpath): void {
    this.notaContacto = notaContacto;
  }

  public getTelefax(): Xpath {
    return this.telefax;
  }

  public setTelefax(telefax: Xpath): void {
    this.telefax = telefax;
  }

  public getTelefono(): Xpath {
    return this.telefono;
  }

  public setTelefono(telefono: Xpath): void {
    this.telefono = telefono;
  }
}
