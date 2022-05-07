import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ApplicationService } from 'src/app/application.service';

import 'rxjs/add/observable/merge';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export default class ServiceAdminGestionLogService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  });

  options = { headers: this.headers };

  constructor(private http: HttpClient, private applicationService:ApplicationService) { }
  map:any;

  getIP(){
    //return this.http.get("https://geolocation-db.com/json/?format=json");
    return this.http
    .get('http://ip-api.com/json')
    .map(response => response || {})
    .catch(this.handleError);
}

private handleError(error: HttpErrorResponse):Observable<any> {
//Log error in the browser console
console.error('observable error: ',error);

return Observable.throw(error);
}
}
