import { getLocaleDayNames } from "@angular/common";
import { NumberValueAccessor } from "@angular/forms";

export class FicheExamenBEPC{
    id_fiche_examen: number;
    annee: number;
    centre_decrit: string;
    date_naissance: string;
    decision: string;
    ets_provenance: string;
    examen: string;
    jury: number;
    lieu_naiss: string;
    mention: string;
    moyenne: number;
    nom_prenom : string;
    num_table : number;
    region: string;
    serie_filiere: string;
    session: string;
    sexe : string;
    type_enseignement: string;

    constructor(id_fiche_examen: number,
    annee: number,
    centre_decrit: string,
    date_naissance: string,
    decision: string,
    ets_provenance: string,
    examen: string,
    jury: number,
    lieu_naiss: string,
    mention: string,
    moyenne: number,
    nom_prenom : string,
    num_table : number,
    region: string,
    serie_filiere: string,
    session: string,
    sexe : string,
    type_enseignement: string) {
        this.id_fiche_examen= id_fiche_examen
        this.annee= annee
        this.centre_decrit= centre_decrit
        this.date_naissance= date_naissance
        this.decision= decision
        this.ets_provenance= ets_provenance
        this.examen= examen
        this.jury= jury
        this.lieu_naiss= lieu_naiss
        this.mention= mention
        this.moyenne= moyenne
        this.nom_prenom = nom_prenom
        this.num_table = num_table
        this.region= region
        this.serie_filiere= serie_filiere
        this.session= session
        this.sexe = sexe
        this.type_enseignement= type_enseignement
      }
      getName():string{
          return '${this.examen}';
      }

}