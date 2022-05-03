import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/application.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdminStatistiqueService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  });

  options = { headers: this.headers };

  constructor(private http: HttpClient, private applicationService:ApplicationService) { }
  

  /** Statistique CEPD */
  getStatCEPDAPIData(){
    return this.http.get<any>(this.applicationService.URL_node+'statCEPD',this.options);
  }

/** Statistique BEPC */
   getStatBEPCAPIData(){
    return this.http.get<any>(this.applicationService.URL_node+'statBEPC',this.options);
  }

/** Statistique BACI */
   getStatBACIAPIData(){
    return this.http.get<any>(this.applicationService.URL_node+'statBACI',this.options);
  }

/** Statistique BACII */
   getStatBACIIAPIData(){
    return this.http.get<any>(this.applicationService.URL_node+'statBACII',this.options);
  }
}
