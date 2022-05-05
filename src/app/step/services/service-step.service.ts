import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/application.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceStepService {

  constructor(private http: HttpClient, private applicationService:ApplicationService) { }

  /**
 * API vers CONFIG
 * @returns 
 */
   getAPIData2(){
    return this.http.get<any>("http://"+this.applicationService.URL+'configs');
  }
}
