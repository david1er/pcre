import { getLocaleDayNames } from "@angular/common";

export class Region{
    id:number;
    libelle_region:string;

  constructor(id: number, libelle_region: string) {
    this.id = id
    this.libelle_region = libelle_region
  }
getName():string{
    return '${this.libelle_region}';
}
}