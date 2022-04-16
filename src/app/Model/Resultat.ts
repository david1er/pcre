import { getLocaleDayNames } from "@angular/common";

export class ResultatExamen{
  idFicheExamen: number;
  num_table: number;
  annee: number;
  examen:string;
  nom_prenom:string;
  mention:string;
  ets_provenance:string;
  region:string;
  moyenne:number;
  jury:number;
  sexe:string;
  session:string;
  date_naissance:Date;
  lieu_naiss:string;
  serie_filiere:string;
  decision:string;
  centre_decrit:string;

  constructor(idFicheExamen: number, num_table: number,annee: number,examen:string,
    nom_prenom:string,mention:string,ets_provenance:string,region:string,moyenne:number,
    jury:number,sexe:string,session:string,date_naissance:Date,lieu_naiss:string,serie_filiere:string,decision:string,centre_decrit:string) {
    this.idFicheExamen = idFicheExamen;
    this.num_table=num_table;
    this.annee=annee;
    this.examen=examen;
    this.nom_prenom=nom_prenom;
    this.mention=mention;
    this.ets_provenance=ets_provenance;
    this.region=region;
    this.moyenne=moyenne;
    this.jury=jury;
    this.sexe=sexe;
    this.session=session;
    this.date_naissance=date_naissance;
    this.lieu_naiss=lieu_naiss;
    this.serie_filiere=serie_filiere;
    this.decision=decision;
    this.centre_decrit=centre_decrit
  }
  getName():string{
      return '${this.examen}';
  }
}