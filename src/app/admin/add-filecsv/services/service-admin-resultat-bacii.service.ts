import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/application.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdminResultatBACIIService {
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
 * @param annee BACII
 * @param examen 
 * @param num_table 
 * @returns 
 */
getResultAdminBACII1APIUrl(annee:number,examen:string,num_table:number){
  return this.http.get<any>(`${this.applicationService.URL_node}adminBACII1/${annee}/${examen}/${num_table}`);
}
getResultAdminBACII3APIUrl(annee:number,nom_prenom:string){
  return this.http.get<any>(`${this.applicationService.URL_node}adminBACII3/${annee}/${nom_prenom}`);
}

getResultAdminBACII4APIUrl(annee:number,examen:string,nom_prenom:string){
  return this.http.get<any>(`${this.applicationService.URL_node}adminBACII4/${annee}/${examen}/${nom_prenom}`);
}

getResultAdminBACII5APIUrl(annee:number,examen:string){
  return this.http.get<any>(`${this.applicationService.URL_node}adminBACII5/${annee}/${examen}`);
}
}
