import { Xpath } from './xpath';

export class Cargo {
  private idCargo: Xpath;
  private porcentajeCargo: Xpath;
  private razonCargo: Xpath;
  private valorBaseCargo: Xpath;
  private valorCargo: Xpath;
  private fechaCargo: Xpath;

  public getIdCargo(): Xpath {
    return this.idCargo;
  }

  public setIdCargo(idCargo: Xpath): void {
    this.idCargo = idCargo;
  }

  public getPorcentajeCargo(): Xpath {
    return this.porcentajeCargo;
  }

  public setPorcentajeCargo(porcentajeCargo: Xpath): void {
    this.porcentajeCargo = porcentajeCargo;
  }

  public getRazonCargo(): Xpath {
    return this.razonCargo;
  }

  public setRazonCargo(razonCargo: Xpath): void {
    this.razonCargo = razonCargo;
  }

  public getValorBaseCargo(): Xpath {
    return this.valorBaseCargo;
  }

  public setValorBaseCargo(valorBaseCargo: Xpath): void {
    this.valorBaseCargo = valorBaseCargo;
  }

  public getValorCargo(): Xpath {
    return this.valorCargo;
  }

  public setValorCargo(valorCargo: Xpath): void {
    this.valorCargo = valorCargo;
  }

  public getFechaCargo(): Xpath {
    return this.fechaCargo;
  }

  public setFechaCargo(fechaCargo: Xpath): void {
    this.fechaCargo = fechaCargo;
  }
}
