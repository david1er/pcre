import { getLocaleDayNames } from "@angular/common";

export class Examen{
    id: number;
    libelle_examen:string;

  constructor(id: number, libelle_examen: string) {
    this.id = id
    this.libelle_examen = libelle_examen
  }
  getName():string{
      return '${this.libelle_examen}';
  }
}