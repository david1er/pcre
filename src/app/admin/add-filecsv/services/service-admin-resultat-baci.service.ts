import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/application.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdminResultatBACIService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  });

  options = { headers: this.headers };

  constructor(private http: HttpClient, private applicationService:ApplicationService) { }
  
   /**
 * 
 * @param annee BACI
 * @param examen 
 * @param num_table 
 * @returns 
 */
getResultAdminBACI1APIUrl(annee:number,examen:string,num_table:number){
  return this.http.get<any>(`${this.applicationService.URL_node}adminBACI1/${annee}/${examen}/${num_table}`);
}
getResultAdminBACI3APIUrl(annee:number,nom_prenom:string){
  return this.http.get<any>(`${this.applicationService.URL_node}adminBACI3/${annee}/${nom_prenom}`);
}

getResultAdminBACI4APIUrl(annee:number,examen:string,nom_prenom:string){
  return this.http.get<any>(`${this.applicationService.URL_node}adminBACI4/${annee}/${examen}/${nom_prenom}`);
}

getResultAdminBACI5APIUrl(annee:number,examen:string){
  return this.http.get<any>(`${this.applicationService.URL_node}adminBACI5/${annee}/${examen}`);
}
getResultAdminBACI6APIUrl(annee:number,examen:string,type_enseignement:string,num_table:number){
  return this.http.get<any>(`${this.applicationService.URL_node}adminBACI6/${annee}/${examen}/${type_enseignement}/${num_table}`);
}
}