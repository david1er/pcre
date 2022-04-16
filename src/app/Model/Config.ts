import { getLocaleDayNames } from "@angular/common";

export class Config{
    idConfig:number;
    examen:string;
    position:number;
    date_publicationDebut:Date;
    date_publicationFin:Date;
    etat:string;

  constructor(idConfig: number, examen:string, position:number,date_publicationDebut:Date,date_publicationFin:Date,etat:string) {
    this.idConfig = idConfig
    this.examen = examen
    this.position = position
    this.date_publicationDebut = date_publicationDebut
    this.date_publicationFin = date_publicationFin
    this.etat = etat
  }
getName():string{
    return '${this.etat}';
}
}