import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Config } from '../Model/Config';
import { DatePublicationGenerale } from '../Model/DatePublicationGenerale';
import { FicheExamenBEPC } from '../Model/FicheExamenBEPC';
import { FicheExamenCEPD } from '../Model/FicheExamenCEPD';
import { FicheExamenBACI } from '../Model/FicheExamenBACI';
import { ApplicationService } from '../application.service';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  

    headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  });

  options = { headers: this.headers };

  constructor(private http: HttpClient, private applicationService:ApplicationService) {
    
   }

/**
 * API vers RESULTAT
 * @returns 
 */
  getAPIData(){
    return this.http.get<any>(this.applicationService.URL_node+'resultats',this.options);
  }
/**
 * API vers CONFIG
 * @returns 
 */
  getAPIData2(){
    return this.http.get<any>("http://"+this.applicationService.URL+'configs');
  }

/**
 * API vers DATE DE PUBLICATION GENERALE
 * @returns 
 */
  getAPIDataPub(){
    //return this.http.get<any>("http://127.0.0.1:8030/api/v1/publics/list");
   
    
    return this.http.get<any>("http://"+this.applicationService.URL +"publics/list");
  }

  /**
   * Requête de recuperation des resultats du CEPD suivant le num de table et la region
   * @param num_table 
   * @param region 
   * @returns 
   */
  getResultAPIUrl(num_table:number,region:string){
    console.log("par cepd",this.applicationService.URL_node);
    return this.http.get<any>(`${this.applicationService.URL_node}cepd/${num_table}/${region}`);
  }

  /**
   * Requête de recuperation des resultats du BEPC suivant le num de table
   * @param num_table 
   * @returns 
   */
  getResultBEPCAPIUrl(num_table:number){
    return this.http.get<any>(`${this.applicationService.URL_node}bepc/${num_table}`);
  }

  /**
   * Requête de recuperation des resultats du BACI suivant le num de table et le type enseignement
   * @param num_table 
   * @param type_enseignement 
   * @returns
   */
  getResultBACIAPIUrl(num_table:number,type_enseignement:string){
    return this.http.get<any>(`${this.applicationService.URL_node}bac1/${num_table}/${type_enseignement}`);
  }

  /**
   * Requête de recuperation des resultats du BACII suivant le num de table
   * @param num_table 
   * @param num_table 
   * @returns
   */
  getResultBACIIAPIUrl(num_table:number){
    return this.http.get<any>(`${this.applicationService.URL_node}bac2/${num_table}`);
  }

  /**
   * Administration requetes
   */
  getResultAdminUAPIUrl(annee:number,examen:string,num_table:number){
    return this.http.get<any>(`${this.applicationService.URL_node}adminU/${annee}/${examen}/${num_table}`);
  }
  getResultAdminTAPIUrl(annee:number,nom_prenom:string){
    return this.http.get<any>(`${this.applicationService.URL_node}adminT/${annee}/${nom_prenom}`);
  }

  getResultAdminQAPIUrl(annee:number,examen:string,nom_prenom:string){
    return this.http.get<any>(`${this.applicationService.URL_node}adminQ/${annee}/${examen}/${nom_prenom}`);
  }

  getResultAdminCAPIUrl(annee:number,examen:string){
    return this.http.get<any>(`${this.applicationService.URL_node}adminC/${annee}/${examen}`);
  }

  // /**
  //  * CEPD
  //  * @param annee 
  //  * @param examen 
  //  * @param num_table 
  //  * @returns 
  //  */
  // getResultAdminCEPD1APIUrl(annee:number,examen:string,num_table:number){
  //   return this.http.get<any>(`${this.applicationService.URL_node}adminCEPD1/${annee}/${examen}/${num_table}`);
  // }
  // getResultAdminCEPD3APIUrl(annee:number,nom_prenom:string){
  //   return this.http.get<any>(`${this.applicationService.URL_node}adminCEPD3/${annee}/${nom_prenom}`);
  // }

  // getResultAdminCEPD4APIUrl(annee:number,examen:string,nom_prenom:string){
  //   return this.http.get<any>(`${this.applicationService.URL_node}adminCEPD4/${annee}/${examen}/${nom_prenom}`);
  // }

  // getResultAdminCEPD5APIUrl(annee:number,examen:string){
  //   return this.http.get<any>(`${this.applicationService.URL_node}adminCEPD5/${annee}/${examen}`);
  // }

  // getResultAdminCEPD6APIUrl(annee:number,examen:string,region:string,num_table:number){
  //   return this.http.get<any>(`${this.applicationService.URL_node}adminCEPD6/${annee}/${examen}/${region}/${num_table}`);
  // }

  // /** BEPC
  //  * 
  // */
  // getResultAdminBEPC1APIUrl(annee:number,examen:string,num_table:number){
  //   return this.http.get<any>(`${this.applicationService.URL_node}adminBEPC1/${annee}/${examen}/${num_table}`);
  // }
  // getResultAdminBEPC3APIUrl(annee:number,nom_prenom:string){
  //   return this.http.get<any>(`${this.applicationService.URL_node}adminBEPC3/${annee}/${nom_prenom}`);
  // }

  // getResultAdminBEPC4APIUrl(annee:number,examen:string,nom_prenom:string){
  //   return this.http.get<any>(`${this.applicationService.URL_node}adminBEPC4/${annee}/${examen}/${nom_prenom}`);
  // }

  // getResultAdminBEPC5APIUrl(annee:number,examen:string){
  //   return this.http.get<any>(`${this.applicationService.URL_node}adminBEPC5/${annee}/${examen}`);
  // }

  /////////
//   /**
//  * 
//  * @param annee BACI
//  * @param examen 
//  * @param num_table 
//  * @returns 
//  */
// getResultAdminBACI1APIUrl(annee:number,examen:string,num_table:number){
//   return this.http.get<any>(`${this.applicationService.URL_node}adminBACI1/${annee}/${examen}/${num_table}`);
// }
// getResultAdminBACI3APIUrl(annee:number,nom_prenom:string){
//   return this.http.get<any>(`${this.applicationService.URL_node}adminBACI3/${annee}/${nom_prenom}`);
// }

// getResultAdminBACI4APIUrl(annee:number,examen:string,nom_prenom:string){
//   return this.http.get<any>(`${this.applicationService.URL_node}adminBACI4/${annee}/${examen}/${nom_prenom}`);
// }

// getResultAdminBACI5APIUrl(annee:number,examen:string){
//   return this.http.get<any>(`${this.applicationService.URL_node}adminBACI5/${annee}/${examen}`);
// }
// getResultAdminBACI6APIUrl(annee:number,examen:string,type_enseignement:string,num_table:number){
//   return this.http.get<any>(`${this.applicationService.URL_node}adminBACI6/${annee}/${examen}/${type_enseignement}/${num_table}`);
// }

  //////////

// /**
//  * 
//  * @param annee BACII
//  * @param examen 
//  * @param num_table 
//  * @returns 
//  */
// getResultAdminBACII1APIUrl(annee:number,examen:string,num_table:number){
//   return this.http.get<any>(`${this.applicationService.URL_node}adminBACII1/${annee}/${examen}/${num_table}`);
// }
// getResultAdminBACII3APIUrl(annee:number,nom_prenom:string){
//   return this.http.get<any>(`${this.applicationService.URL_node}adminBACII3/${annee}/${nom_prenom}`);
// }

// getResultAdminBACII4APIUrl(annee:number,examen:string,nom_prenom:string){
//   return this.http.get<any>(`${this.applicationService.URL_node}adminBACII4/${annee}/${examen}/${nom_prenom}`);
// }

// getResultAdminBACII5APIUrl(annee:number,examen:string){
//   return this.http.get<any>(`${this.applicationService.URL_node}adminBACII5/${annee}/${examen}`);
// }


  /**
   * Administration requete sur Config
   */
  /**
   * Methode d'ajout de configuration
   * @returns 
   */
  // postAdminConfigAPIURL(config:Config){
  //   return this.http.post<Config>(this.applicationService.URL+'configs',config,this.options);
  // }

  // /**
  //  * Methode de mise à jour de config
  //  * @returns 
  //  */
  // updateAdminConfigAPIURL(config:Config){
  //   return this.http.put<Config>(this.applicationService.URL+'configs',config,this.options);
  // }
  
  // /**
  //  * Methode de suppression de config
  //  * @returns 
  //  */
  // deleteAdminConfigAPIURL(idConfig:number){
  //   return this.http.delete<any>(`${this.applicationService.URL}configs/${idConfig}`);
  // }

  /**
   * Administration requete sur Date de Publication Générale
   */
  /**
   * Methode d'ajout de date de publication générale
   * @returns 
   */
  // postAdminDatePublicationGeneraleAPIURL(datePublicationGenerale:DatePublicationGenerale){
  //   return this.http.post<DatePublicationGenerale>("http://"+this.applicationService.URL+'publics/add',datePublicationGenerale);
  // }

  // /**
  //  * Methode de mise à jour de date de publication générale
  //  * @returns 
  //  */
  // updateAdminDatePublicationGeneraleAPIURL(datePublicationGenerale:DatePublicationGenerale){
  //   return this.http.put<DatePublicationGenerale>("http://"+this.applicationService.URL+'publics/update',datePublicationGenerale);
  // }
  
  // /**
  //  * Methode de suppression de date de publication générale
  //  * @returns 
  //  */
  // deleteAdminDatePublicationGeneraleAPIURL(idDatePublicationGenerale:number){
  //   return this.http.delete<any>(`"http://"${this.applicationService.URL}publics/delete/${idDatePublicationGenerale}`);
  // }

  /**
   * EXAMENS CEPC/BEPC/BAC1/BAC2
   */
  /**
   * Methode d'ajout du CEPD
   * @returns 
   */
   postAdminCEPDAPIURL(ficheExamenCEPD:FicheExamenCEPD){
    return this.http.post<FicheExamenCEPD>(this.applicationService.URL_node+'cepd/add',ficheExamenCEPD,this.options);
  }

  /**
   * Methode d'ajout du BEPC
   * @returns 
   */
   postAdminBEPCAPIURL(ficheExamenBEPC:FicheExamenBEPC){
    return this.http.post<FicheExamenBEPC>(this.applicationService.URL_node+'bepc/add',ficheExamenBEPC,this.options);
  }

  /**
   * Methode d'ajout du BACI
   * @returns 
   */
   postAdminBACIAPIURL(ficheExamenBACI:FicheExamenBACI){
    return this.http.post<FicheExamenBACI>(this.applicationService.URL_node+'bac1/add',ficheExamenBACI,this.options);
  }

  /**
   * STATISTIQUES
   */
/** Statistique CEPD */
//    getStatCEPDAPIData(){
//     return this.http.get<any>(this.applicationService.URL_node+'statCEPD',this.options);
//   }

// /** Statistique BEPC */
//    getStatBEPCAPIData(){
//     return this.http.get<any>(this.applicationService.URL_node+'statBEPC',this.options);
//   }

// /** Statistique BACI */
//    getStatBACIAPIData(){
//     return this.http.get<any>(this.applicationService.URL_node+'statBACI',this.options);
//   }

// /** Statistique BACII */
//    getStatBACIIAPIData(){
//     return this.http.get<any>(this.applicationService.URL_node+'statBACII',this.options);
//   }

}
