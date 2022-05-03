import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationService } from '../application.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesPublicResultatBEPCService {
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
   * Requête de recuperation des resultats du BEPC suivant le num de table
   * @param num_table 
   * @returns 
   */
  getResultBEPCAPIUrl(num_table:number){
    return this.http.get<any>(`${this.applicationService.URL_node}bepc/${num_table}`);
  }

}