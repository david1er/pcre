import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/application.service';
import { Config } from 'src/app/Model/Config';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdminConfigPublicationService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  });

  options = { headers: this.headers };

  constructor(private http: HttpClient, private applicationService:ApplicationService) { }

  /**
 * API vers CONFIG
 * @returns 
 */
   getAPIData2(){
    return this.http.get<any>("http://"+this.applicationService.URL+'configs');
  }

  /**
   * Administration requete sur Config
   */
  /**
   * Methode d'ajout de configuration
   * @returns 
   */
   postAdminConfigAPIURL(config:Config){
    return this.http.post<Config>(`${this.applicationService.URL}configs`,config,this.options);
  }

  /**
   * Methode de mise à jour de config
   * @returns 
   */
  updateAdminConfigAPIURL(config:Config){
    return this.http.put<Config>(`${this.applicationService.URL}configs`,config,this.options);
  }
  
  /**
   * Methode de suppression de config
   * @returns 
   */
  deleteAdminConfigAPIURL(idConfig:number){
    return this.http.delete<any>("http://"+`${this.applicationService.URL}configs/${idConfig}`);
  }


}
