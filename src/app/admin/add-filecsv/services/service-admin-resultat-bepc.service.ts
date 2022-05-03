import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/application.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdminResultatBEPCService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  });

  options = { headers: this.headers };

  constructor(private http: HttpClient, private applicationService:ApplicationService) {
    
   }
  
  /** BEPC
   * 
  */
   getResultAdminBEPC1APIUrl(annee:number,examen:string,num_table:number){
    return this.http.get<any>(`${this.applicationService.URL_node}adminBEPC1/${annee}/${examen}/${num_table}`);
  }
  getResultAdminBEPC3APIUrl(annee:number,nom_prenom:string){
    return this.http.get<any>(`${this.applicationService.URL_node}adminBEPC3/${annee}/${nom_prenom}`);
  }

  getResultAdminBEPC4APIUrl(annee:number,examen:string,nom_prenom:string){
    return this.http.get<any>(`${this.applicationService.URL_node}adminBEPC4/${annee}/${examen}/${nom_prenom}`);
  }

  getResultAdminBEPC5APIUrl(annee:number,examen:string){
    return this.http.get<any>(`${this.applicationService.URL_node}adminBEPC5/${annee}/${examen}`);
  }

}
