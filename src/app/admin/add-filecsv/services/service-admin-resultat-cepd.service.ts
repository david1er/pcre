import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/application.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdminResultatCEPDService {
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
   * CEPD
   * @param annee 
   * @param examen 
   * @param num_table 
   * @returns 
   */
  getResultAdminCEPD1APIUrl(annee:number,examen:string,num_table:number){
    return this.http.get<any>(`${this.applicationService.URL_node}adminCEPD1/${annee}/${examen}/${num_table}`);
  }
  getResultAdminCEPD3APIUrl(annee:number,nom_prenom:string){
    return this.http.get<any>(`${this.applicationService.URL_node}adminCEPD3/${annee}/${nom_prenom}`);
  }

  getResultAdminCEPD4APIUrl(annee:number,examen:string,nom_prenom:string){
    return this.http.get<any>(`${this.applicationService.URL_node}adminCEPD4/${annee}/${examen}/${nom_prenom}`);
  }

  getResultAdminCEPD5APIUrl(annee:number,examen:string){
    return this.http.get<any>(`${this.applicationService.URL_node}adminCEPD5/${annee}/${examen}`);
  }

  getResultAdminCEPD6APIUrl(annee:number,examen:string,region:string,num_table:number){
    return this.http.get<any>(`${this.applicationService.URL_node}adminCEPD6/${annee}/${examen}/${region}/${num_table}`);
  }
  }