import { Xpath } from './xpath';

export class Uuid {
  private uuid: Xpath;
  private uuidType: Xpath;

  public getUuid(): Xpath {
    return this.uuid;
  }

  public setUuid(uuid: Xpath): void {
    this.uuid = uuid;
  }

  public getUuidType(): Xpath {
    return this.uuidType;
  }

  public setUuidType(uuidType: Xpath): void {
    this.uuidType = uuidType;
  }
}
