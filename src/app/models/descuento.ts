import { Xpath } from './xpath';

export class Descuento {
  private idDescuento: Xpath;
  private porcentajeDto: Xpath;
  private razonDescuento: Xpath;
  private valorBaseDto: Xpath;
  private valorDto: Xpath;
  private codigoRazonDto: Xpath;
  private fechaDescuento: Xpath;

  public getIdDescuento(): Xpath {
    return this.idDescuento;
  }

  public setIdDescuento(idDescuento: Xpath): void {
    this.idDescuento = idDescuento;
  }

  public getPorcentajeDto(): Xpath {
    return this.porcentajeDto;
  }

  public setPorcentajeDto(porcentajeDto: Xpath): void {
    this.porcentajeDto = porcentajeDto;
  }

  public getRazonDescuento(): Xpath {
    return this.razonDescuento;
  }

  public setRazonDescuento(razonDescuento: Xpath): void {
    this.razonDescuento = razonDescuento;
  }

  public getValorBaseDto(): Xpath {
    return this.valorBaseDto;
  }

  public setValorBaseDto(valorBaseDto: Xpath): void {
    this.valorBaseDto = valorBaseDto;
  }

  public getValorDto(): Xpath {
    return this.valorDto;
  }

  public setValorDto(valorDto: Xpath): void {
    this.valorDto = valorDto;
  }

  public getCodigoRazonDto(): Xpath {
    return this.codigoRazonDto;
  }

  public setCodigoRazonDto(codigoRazonDto: Xpath): void {
    this.codigoRazonDto = codigoRazonDto;
  }

  public getFechaDescuento(): Xpath {
    return this.fechaDescuento;
  }

  public setFechaDescuento(fechaDescuento: Xpath): void {
    this.fechaDescuento = fechaDescuento;
  }
}
