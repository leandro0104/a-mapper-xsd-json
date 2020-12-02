import { Xpath } from './xpath';
import { Uuid } from './uuid';

export class CabezeraFactura {
  private ambiente: Xpath;
  private cantidadDetalles: Xpath;
  private fechaEmision: Xpath;
  private horaEmision: Xpath;
  private monedaDocumento: Xpath;
  private operacion: Xpath;
  private uuid: Uuid;
  private canalVentas: Xpath;
  private descripcion: Xpath;
  private fechaPagoImpuestos: Xpath;
  private fechaSuspension: Xpath;
  private fechaVencimiento: Xpath;
  private lineaResumen: Xpath;
  private numeroCuenta: Xpath;
  private numeroPedido: Xpath;
  private sucursal: Xpath;

  public getAmbiente(): Xpath {
    return this.ambiente;
  }

  public setAmbiente(ambiente: Xpath): void {
    this.ambiente = ambiente;
  }

  public getCantidadDetalles(): Xpath {
    return this.cantidadDetalles;
  }

  public setCantidadDetalles(cantidadDetalles: Xpath): void {
    this.cantidadDetalles = cantidadDetalles;
  }

  public getFechaEmision(): Xpath {
    return this.fechaEmision;
  }

  public setFechaEmision(fechaEmision: Xpath): void {
    this.fechaEmision = fechaEmision;
  }

  public getHoraEmision(): Xpath {
    return this.horaEmision;
  }

  public setHoraEmision(horaEmision: Xpath): void {
    this.horaEmision = horaEmision;
  }

  public getMonedaDocumento(): Xpath {
    return this.monedaDocumento;
  }

  public setMonedaDocumento(monedaDocumento: Xpath): void {
    this.monedaDocumento = monedaDocumento;
  }

  public getOperacion(): Xpath {
    return this.operacion;
  }

  public setOperacion(operacion: Xpath): void {
    this.operacion = operacion;
  }

  public getUuid(): Uuid {
    return this.uuid;
  }

  public setUuid(uuid: Uuid): void {
    this.uuid = uuid;
  }

  public getCanalVentas(): Xpath {
    return this.canalVentas;
  }

  public setCanalVentas(canalVentas: Xpath): void {
    this.canalVentas = canalVentas;
  }

  public getDescripcion(): Xpath {
    return this.descripcion;
  }

  public setDescripcion(descripcion: Xpath): void {
    this.descripcion = descripcion;
  }

  public getFechaPagoImpuestos(): Xpath {
    return this.fechaPagoImpuestos;
  }

  public setFechaPagoImpuestos(fechaPagoImpuestos: Xpath): void {
    this.fechaPagoImpuestos = fechaPagoImpuestos;
  }

  public getFechaSuspension(): Xpath {
    return this.fechaSuspension;
  }

  public setFechaSuspension(fechaSuspension: Xpath): void {
    this.fechaSuspension = fechaSuspension;
  }

  public getFechaVencimiento(): Xpath {
    return this.fechaVencimiento;
  }

  public setFechaVencimiento(fechaVencimiento: Xpath): void {
    this.fechaVencimiento = fechaVencimiento;
  }

  public getLineaResumen(): Xpath {
    return this.lineaResumen;
  }

  public setLineaResumen(lineaResumen: Xpath): void {
    this.lineaResumen = lineaResumen;
  }

  public getNumeroCuenta(): Xpath {
    return this.numeroCuenta;
  }

  public setNumeroCuenta(numeroCuenta: Xpath): void {
    this.numeroCuenta = numeroCuenta;
  }

  public getNumeroPedido(): Xpath {
    return this.numeroPedido;
  }

  public setNumeroPedido(numeroPedido: Xpath): void {
    this.numeroPedido = numeroPedido;
  }

  public getSucursal(): Xpath {
    return this.sucursal;
  }

  public setSucursal(sucursal: Xpath): void {
    this.sucursal = sucursal;
  }
}
