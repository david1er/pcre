import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService implements OnInit{

  public URL = "127.0.0.1:8030/api/v1/";
  public URL_user = "127.0.0.1:8030/";
  public URL_node = "http://127.0.0.1:3500/api/v1/examens/";

  jwt:any;
  username!:string;
  utilisateur!:string;
  roles!:Array<string>;

  constructor(private http:HttpClient) { }

  ngOnInit() {

    }

  login(data:any){
    return this.http.post("http://"+this.URL_user+"login",data,{observe:'response'})
  }

  saveToken(jwt: string | null){
    if (jwt != null) {
      localStorage.setItem('token', jwt);
    }
    this.jwt=jwt;
    //console.log(jwt);
    this.parseJWT();
  }

  parseJWT(){
    let jwtHelper=new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    const expirationDate = jwtHelper.getTokenExpirationDate(this.jwt);
    const isExpired = jwtHelper.isTokenExpired(this.jwt);
    console.log(isExpired);
    this.username=objJWT.obj;
    this.roles=objJWT.roles;
    this.utilisateur=objJWT.sub;
    localStorage.setItem('utilisateur',JSON.stringify(objJWT.sub));

  }

  loadToken(){
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }

  isAdmin(){
    localStorage.setItem('roles',JSON.stringify('ADMIN'));
    return this.roles.indexOf('ADMIN')>=0;
  }

  isUser(){
    localStorage.setItem('roles',JSON.stringify('USER'));
    return this.roles.indexOf('USER')>=0;
  }

  isAuthenticated(){
    return this.roles && (this.isAdmin() || this.isUser());
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    this.initParams();
  }

  initParams(){
    this.jwt=undefined;
    // @ts-ignore
    this.username=undefined;
    // @ts-ignore
    this.roles=undefined;
  }
}
