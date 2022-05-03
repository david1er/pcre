import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/application.service';
import { DatePublicationGenerale } from 'src/app/Model/DatePublicationGenerale';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdminDatePubGeneraleService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  });

  options = { headers: this.headers };

  constructor(private http: HttpClient, private applicationService:ApplicationService) { }
  
  /**
 * API vers DATE DE PUBLICATION GENERALE
 * @returns 
 */
   getAPIDataPub(){
    //return this.http.get<any>("http://127.0.0.1:8030/api/v1/publics/list");
   
    
    return this.http.get<any>("http://"+this.applicationService.URL +"publics/list");
  }

  postAdminDatePublicationGeneraleAPIURL(datePublicationGenerale:DatePublicationGenerale){
    return this.http.post<DatePublicationGenerale>("http://"+this.applicationService.URL+'publics/add',datePublicationGenerale);
  }

  /**
   * Methode de mise à jour de date de publication générale
   * @returns 
   */
  updateAdminDatePublicationGeneraleAPIURL(datePublicationGenerale:DatePublicationGenerale){
    return this.http.put<DatePublicationGenerale>("http://"+this.applicationService.URL+'publics/update',datePublicationGenerale);
  }
  
  /**
   * Methode de suppression de date de publication générale
   * @returns 
   */
  deleteAdminDatePublicationGeneraleAPIURL(idDatePublicationGenerale:number){
    return this.http.delete<any>(`"http://"${this.applicationService.URL}publics/delete/${idDatePublicationGenerale}`);
  }
}
