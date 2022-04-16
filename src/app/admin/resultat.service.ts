import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Config } from '../Model/Config';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  base_url = environment.base_url;
  base_url2 = environment.base_url2;
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
   * Requête de recuperation des resultats du CEPD suivant le num de table et la region
   * @param num_table 
   * @param region 
   * @returns 
   */
  getResultAPIUrl(num_table:number,region:string){
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
   * Administration requete
   */
  getResultAdminUAPIUrl(annee:number,examen:string,num_table:number){
    return this.http.get<any>(`${this.base_url}admin/${annee}/${examen}/${num_table}`);
  }
  getResultAdminTAPIUrl(annee:number,nom_prenom:string){
    return this.http.get<any>(`${this.base_url}adminT/${annee}/${nom_prenom}`);
  }

  getResultAdminQAPIUrl(annee:number,examen:string,nom_prenom:string){
    return this.http.get<any>(`${this.base_url}adminQ/${annee}/${examen}/${nom_prenom}`);
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
  updateAdminConfigAPIURL(){
    return this.http.post<any>(this.base_url2+'configs',this.options);
  }
  
  /**
   * Methode de suppression de config
   * @returns 
   */
  deleteAdminConfigAPIURL(idConfig:number){
    return this.http.delete<any>(`${this.base_url2}configs/${idConfig}`);
  }
}
