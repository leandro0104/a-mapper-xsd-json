import { Xpath } from './xpath';
import { Adquiriente } from './adquiriente';
import { CabezeraFactura } from './cabezera-factura';
import { Detalle } from './detalle';
import { Obligado } from './obligado';
import { Totales } from './totales';
import { TerminoEntrega } from './termino-entrega';
import { Impuesto } from './impuesto';
import { TasaCambio } from './tasa-cambio';
import { RefOrdenCompra } from './ref-orden-compra';
import { RefOtroDocumento } from './ref-otro-documento';
import { RefDocDespacho } from './ref-doc-despacho';
import { InfoResolucion } from './info-resolucion';
import { MedioPago } from './medio-pago';
import { PeriodoFacturacion } from './periodo-facturacion';
import { RefDocRecibo } from './ref-doc-recibo';
import { Cargo } from './cargo';
import { Descuento } from './descuento';
import { Anticipo } from './anticipo';
import { AutorizadoDescargar } from './autorizado-descargar';
import { CamposCustom } from './campos-custom';

export class Template {

  private numDocumento: Xpath;
  private tipoDocElect: Xpath;
  private adquirientes: Adquiriente[];
  private cabezeraFactura: CabezeraFactura;
  private detalles: Detalle[];
  private obligado: Obligado;
  private totales: Totales;
  private terminoEntrega: TerminoEntrega[];
  private totalImpuesto: Impuesto[];
  private tasaCambio: TasaCambio[];
  private refOrdenCompra: RefOrdenCompra;
  private refOtroDocumento: RefOtroDocumento[];
  private refDocDespacho: RefDocDespacho[];
  private infoResolucion: InfoResolucion;
  private lenguaje: Xpath;
  private medioPago: MedioPago;
  private periodoFacturacion: PeriodoFacturacion;
  private refDocRecibo: RefDocRecibo;
  private cargos: Cargo[];
  private descuentos: Descuento[];
  private anticipos: Anticipo[];
  private autorizadoDescargar: AutorizadoDescargar;
  private mapeoColecciones: Xpath[];
  private camposCustom: CamposCustom;
  
  public getNumDocumento(): Xpath {
    return this.numDocumento;
  }

  public setNumDocumento(numDocumento: Xpath): void {
    this.numDocumento = numDocumento;
  }

  public getTipoDocElect(): Xpath {
    return this.tipoDocElect;
  }

  public setTipoDocElect(tipoDocElect: Xpath): void {
    this.tipoDocElect = tipoDocElect;
  }

  public getAdquirientes(): Adquiriente[] {
    return this.adquirientes;
  }

  public setAdquirientes(adquirientes: Adquiriente[]): void {
    this.adquirientes = adquirientes;
  }

  public getCabezeraFactura(): CabezeraFactura {
    return this.cabezeraFactura;
  }

  public setCabezeraFactura(cabezeraFactura: CabezeraFactura): void {
    this.cabezeraFactura = cabezeraFactura;
  }

  public getDetalles(): Detalle[] {
    return this.detalles;
  }

  public setDetalles(detalles: Detalle[]): void {
    this.detalles = detalles;
  }

  public getObligado(): Obligado {
    return this.obligado;
  }

  public setObligado(obligado: Obligado): void {
    this.obligado = obligado;
  }

  public getTotales(): Totales {
    return this.totales;
  }

  public setTotales(totales: Totales): void {
    this.totales = totales;
  }

  public getTerminoEntrega(): TerminoEntrega[] {
    return this.terminoEntrega;
  }

  public setTerminoEntrega(terminoEntrega: TerminoEntrega[]): void {
    this.terminoEntrega = terminoEntrega;
  }

  public getTotalImpuesto(): Impuesto[] {
    return this.totalImpuesto;
  }

  public setTotalImpuesto(totalImpuesto: Impuesto[]): void {
    this.totalImpuesto = totalImpuesto;
  }

  public getTasaCambio(): TasaCambio[] {
    return this.tasaCambio;
  }

  public setTasaCambio(tasaCambio: TasaCambio[]): void {
    this.tasaCambio = tasaCambio;
  }

  public getRefOrdenCompra(): RefOrdenCompra {
    return this.refOrdenCompra;
  }

  public setRefOrdenCompra(refOrdenCompra: RefOrdenCompra): void {
    this.refOrdenCompra = refOrdenCompra;
  }

  public getRefOtroDocumento(): RefOtroDocumento[] {
    return this.refOtroDocumento;
  }

  public setRefOtroDocumento(refOtroDocumento: RefOtroDocumento[]): void {
    this.refOtroDocumento = refOtroDocumento;
  }

  public getRefDocDespacho(): RefDocDespacho[] {
    return this.refDocDespacho;
  }

  public setRefDocDespacho(refDocDespacho: RefDocDespacho[]): void {
    this.refDocDespacho = refDocDespacho;
  }

  public getInfoResolucion(): InfoResolucion {
    return this.infoResolucion;
  }

  public setInfoResolucion(infoResolucion: InfoResolucion): void {
    this.infoResolucion = infoResolucion;
  }

  public getLenguaje(): Xpath {
    return this.lenguaje;
  }

  public setLenguaje(lenguaje: Xpath): void {
    this.lenguaje = lenguaje;
  }

  public getMedioPago(): MedioPago {
    return this.medioPago;
  }

  public setMedioPago(medioPago: MedioPago): void {
    this.medioPago = medioPago;
  }

  public getPeriodoFacturacion(): PeriodoFacturacion {
    return this.periodoFacturacion;
  }

  public setPeriodoFacturacion(periodoFacturacion: PeriodoFacturacion): void {
    this.periodoFacturacion = periodoFacturacion;
  }

  public getRefDocRecibo(): RefDocRecibo {
    return this.refDocRecibo;
  }

  public setRefDocRecibo(refDocRecibo: RefDocRecibo): void {
    this.refDocRecibo = refDocRecibo;
  }

  public getCargos(): Cargo[] {
    return this.cargos;
  }

  public setCargos(cargos: Cargo[]): void {
    this.cargos = cargos;
  }

  public getDescuentos(): Descuento[] {
    return this.descuentos;
  }

  public setDescuentos(descuentos: Descuento[]): void {
    this.descuentos = descuentos;
  }

  public getAnticipos(): Anticipo[] {
    return this.anticipos;
  }

  public setAnticipos(anticipos: Anticipo[]): void {
    this.anticipos = anticipos;
  }

  public getAutorizadoDescargar(): AutorizadoDescargar {
    return this.autorizadoDescargar;
  }

  public setAutorizadoDescargar(
    autorizadoDescargar: AutorizadoDescargar
  ): void {
    this.autorizadoDescargar = autorizadoDescargar;
  }

  public getMapeoColecciones(): Xpath[] {
    return this.mapeoColecciones;
  }

  public setMapeoColecciones(mapeoColecciones: Xpath[]): void {
    this.mapeoColecciones = mapeoColecciones;
  }

  public getCamposCustom(): CamposCustom {
    return this.camposCustom;
  }

  public setCamposCustom(camposCustom: CamposCustom): void {
    this.camposCustom = camposCustom;
  }
}
