import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Config } from '../Model/Config';
import { DatePublicationGenerale } from '../Model/DatePublicationGenerale';
import { FicheExamenBEPC } from '../Model/FicheExamenBEPC';
import { FicheExamenCEPD } from '../Model/FicheExamenCEPD';
import { FicheExamenBACI } from '../Model/FicheExamenBACI';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  base_url = environment.base_url;
  base_url2 = environment.base_url2;
  base_url_datepub = environment.base_url_datepub;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  });

  options = { headers: this.headers };

  constructor(private http: HttpClient) {
    
   }
/**
 * API vers RESULTAT
 * @returns 
 */
  getAPIData(){
    return this.http.get<any>(this.base_url+'resultats',this.options);
  }
/**
 * API vers CONFIG
 * @returns 
 */
  getAPIData2(){
    return this.http.get<any>(this.base_url2+'configs',this.options);
  }

/**
 * API vers DATE DE PUBLICATION GENERALE
 * @returns 
 */
  getAPIDataPub(){
    return this.http.get<any>(this.base_url_datepub+'publics/list',this.options);
  }

  /**
   * Requête de recuperation des resultats du CEPD suivant le num de table et la region
   * @param num_table 
   * @param region 
   * @returns 
   */
  getResultAPIUrl(num_table:number,region:string){
    console.log("par cepd",this.base_url);
    return this.http.get<any>(`${this.base_url}cepd/${num_table}/${region}`);
  }

  /**
   * Requête de recuperation des resultats du BEPC suivant le num de table
   * @param num_table 
   * @returns 
   */
  getResultBEPCAPIUrl(num_table:number){
    return this.http.get<any>(`${this.base_url}bepc/${num_table}`);
  }

  /**
   * Requête de recuperation des resultats du BACI suivant le num de table et le type enseignement
   * @param num_table 
   * @param type_enseignement 
   * @returns
   */
  getResultBACIAPIUrl(num_table:number,type_enseignement:string){
    return this.http.get<any>(`${this.base_url}bac1/${num_table}/${type_enseignement}`);
  }

  /**
   * Requête de recuperation des resultats du BACII suivant le num de table
   * @param num_table 
   * @param num_table 
   * @returns
   */
  getResultBACIIAPIUrl(num_table:number){
    return this.http.get<any>(`${this.base_url}bac2/${num_table}`);
  }

  /**
   * Administration requetes
   */
  getResultAdminUAPIUrl(annee:number,examen:string,num_table:number){
    return this.http.get<any>(`${this.base_url}adminU/${annee}/${examen}/${num_table}`);
  }
  getResultAdminTAPIUrl(annee:number,nom_prenom:string){
    return this.http.get<any>(`${this.base_url}adminT/${annee}/${nom_prenom}`);
  }

  getResultAdminQAPIUrl(annee:number,examen:string,nom_prenom:string){
    return this.http.get<any>(`${this.base_url}adminQ/${annee}/${examen}/${nom_prenom}`);
  }

  getResultAdminCAPIUrl(annee:number,examen:string){
    return this.http.get<any>(`${this.base_url}adminC/${annee}/${examen}`);
  }

  /**
   * CEPD
   * @param annee 
   * @param examen 
   * @param num_table 
   * @returns 
   */
  getResultAdminCEPD1APIUrl(annee:number,examen:string,num_table:number){
    return this.http.get<any>(`${this.base_url}adminCEPD1/${annee}/${examen}/${num_table}`);
  }
  getResultAdminCEPD3APIUrl(annee:number,nom_prenom:string){
    return this.http.get<any>(`${this.base_url}adminCEPD3/${annee}/${nom_prenom}`);
  }

  getResultAdminCEPD4APIUrl(annee:number,examen:string,nom_prenom:string){
    return this.http.get<any>(`${this.base_url}adminCEPD4/${annee}/${examen}/${nom_prenom}`);
  }

  getResultAdminCEPD5APIUrl(annee:number,examen:string){
    return this.http.get<any>(`${this.base_url}adminCEPD5/${annee}/${examen}`);
  }

  getResultAdminCEPD6APIUrl(annee:number,examen:string,region:string,num_table:number){
    return this.http.get<any>(`${this.base_url}adminCEPD6/${annee}/${examen}/${region}/${num_table}`);
  }

  /** BEPC
   * 
  */
  getResultAdminBEPC1APIUrl(annee:number,examen:string,num_table:number){
    return this.http.get<any>(`${this.base_url}adminBEPC1/${annee}/${examen}/${num_table}`);
  }
  getResultAdminBEPC3APIUrl(annee:number,nom_prenom:string){
    return this.http.get<any>(`${this.base_url}adminBEPC3/${annee}/${nom_prenom}`);
  }

  getResultAdminBEPC4APIUrl(annee:number,examen:string,nom_prenom:string){
    return this.http.get<any>(`${this.base_url}adminBEPC4/${annee}/${examen}/${nom_prenom}`);
  }

  getResultAdminBEPC5APIUrl(annee:number,examen:string){
    return this.http.get<any>(`${this.base_url}adminBEPC5/${annee}/${examen}`);
  }

  /////////
  /**
 * 
 * @param annee BACI
 * @param examen 
 * @param num_table 
 * @returns 
 */
getResultAdminBACI1APIUrl(annee:number,examen:string,num_table:number){
  return this.http.get<any>(`${this.base_url}adminBACI1/${annee}/${examen}/${num_table}`);
}
getResultAdminBACI3APIUrl(annee:number,nom_prenom:string){
  return this.http.get<any>(`${this.base_url}adminBACI3/${annee}/${nom_prenom}`);
}

getResultAdminBACI4APIUrl(annee:number,examen:string,nom_prenom:string){
  return this.http.get<any>(`${this.base_url}adminBACI4/${annee}/${examen}/${nom_prenom}`);
}

getResultAdminBACI5APIUrl(annee:number,examen:string){
  return this.http.get<any>(`${this.base_url}adminBACI5/${annee}/${examen}`);
}
getResultAdminBACI6APIUrl(annee:number,examen:string,type_enseignement:string,num_table:number){
  return this.http.get<any>(`${this.base_url}adminBACI6/${annee}/${examen}/${type_enseignement}/${num_table}`);
}

  //////////

/**
 * 
 * @param annee BACII
 * @param examen 
 * @param num_table 
 * @returns 
 */
getResultAdminBACII1APIUrl(annee:number,examen:string,num_table:number){
  return this.http.get<any>(`${this.base_url}adminBACII1/${annee}/${examen}/${num_table}`);
}
getResultAdminBACII3APIUrl(annee:number,nom_prenom:string){
  return this.http.get<any>(`${this.base_url}adminBACII3/${annee}/${nom_prenom}`);
}

getResultAdminBACII4APIUrl(annee:number,examen:string,nom_prenom:string){
  return this.http.get<any>(`${this.base_url}adminBACII4/${annee}/${examen}/${nom_prenom}`);
}

getResultAdminBACII5APIUrl(annee:number,examen:string){
  return this.http.get<any>(`${this.base_url}adminBACII5/${annee}/${examen}`);
}


  /**
   * Administration requete sur Config
   */
  /**
   * Methode d'ajout de configuration
   * @returns 
   */
  postAdminConfigAPIURL(config:Config){
    return this.http.post<Config>(this.base_url2+'configs',config,this.options);
  }

  /**
   * Methode de mise à jour de config
   * @returns 
   */
  updateAdminConfigAPIURL(config:Config){
    return this.http.put<Config>(this.base_url2+'configs',config,this.options);
  }
  
  /**
   * Methode de suppression de config
   * @returns 
   */
  deleteAdminConfigAPIURL(idConfig:number){
    return this.http.delete<any>(`${this.base_url2}configs/${idConfig}`);
  }

  /**
   * Administration requete sur Date de Publication Générale
   */
  /**
   * Methode d'ajout de date de publication générale
   * @returns 
   */
  postAdminDatePublicationGeneraleAPIURL(datePublicationGenerale:DatePublicationGenerale){
    return this.http.post<DatePublicationGenerale>(this.base_url_datepub+'publics/add',datePublicationGenerale,this.options);
  }

  /**
   * Methode de mise à jour de date de publication générale
   * @returns 
   */
  updateAdminDatePublicationGeneraleAPIURL(datePublicationGenerale:DatePublicationGenerale){
    return this.http.put<DatePublicationGenerale>(this.base_url_datepub+'publics/update',datePublicationGenerale,this.options);
  }
  
  /**
   * Methode de suppression de date de publication générale
   * @returns 
   */
  deleteAdminDatePublicationGeneraleAPIURL(idDatePublicationGenerale:number){
    return this.http.delete<any>(`${this.base_url_datepub}publics/delete/${idDatePublicationGenerale}`);
  }

  /**
   * EXAMENS CEPC/BEPC/BAC1/BAC2
   */
  /**
   * Methode d'ajout du CEPD
   * @returns 
   */
   postAdminCEPDAPIURL(ficheExamenCEPD:FicheExamenCEPD){
    return this.http.post<FicheExamenCEPD>(this.base_url2+'cepd/add',ficheExamenCEPD,this.options);
  }

  /**
   * Methode d'ajout du BEPC
   * @returns 
   */
   postAdminBEPCAPIURL(ficheExamenBEPC:FicheExamenBEPC){
    return this.http.post<FicheExamenBEPC>(this.base_url2+'bepc/add',ficheExamenBEPC,this.options);
  }

  /**
   * Methode d'ajout du BACI
   * @returns 
   */
   postAdminBACIAPIURL(ficheExamenBACI:FicheExamenBACI){
    return this.http.post<FicheExamenBACI>(this.base_url2+'bac1/add',ficheExamenBACI,this.options);
  }

  /**
   * STATISTIQUES
   */
/** Statistique CEPD */
   getStatCEPDAPIData(){
    return this.http.get<any>(this.base_url+'statCEPD',this.options);
  }

/** Statistique BEPC */
   getStatBEPCAPIData(){
    return this.http.get<any>(this.base_url+'statBEPC',this.options);
  }

/** Statistique BACI */
   getStatBACIAPIData(){
    return this.http.get<any>(this.base_url+'statBACI',this.options);
  }

/** Statistique BACII */
   getStatBACIIAPIData(){
    return this.http.get<any>(this.base_url+'statBACII',this.options);
  }

}
