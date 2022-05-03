import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationService } from '../application.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesPublicResultatCEPDService {
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
   * Requête de recuperation des resultats du CEPD suivant le num de table et la region
   * @param num_table 
   * @param region 
   * @returns 
   */
  getResultAPIUrl(num_table:number,region:string){
    console.log("par cepd public cepd",this.applicationService.URL_node);
    return this.http.get<any>(`${this.applicationService.URL_node}cepd/${num_table}/${region}`);
  }
}