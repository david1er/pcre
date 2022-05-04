import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/application.service';
import { AppUser } from 'src/app/Model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ServiceGestionUtilisateurService {

  constructor(private http: HttpClient, private applicationService:ApplicationService) { }

  /**
 * API vers AppUser
 * @returns
 */
   getAPIData(){
    return this.http.get<any>("http://"+this.applicationService.URL_user+'users/allUsers');
  }

  /**
   * API vers AppUser
   * @returns
   */
  getRoles(){
    return this.http.get<any>("http://"+this.applicationService.URL_user+'users/allRoles');
  }

  /**
   * Administration requete sur AppUser
   */
  /**
   * Methode d'ajout d'un utilisateur
   * @returns
   */
   postAdminAppUserAPIURL(appUser:AppUser){
    return this.http.post<AppUser>(this.applicationService.URL_user+'users',appUser);
  }

  /**
   * Methode de mise à jour de utilisateur
   * @returns
   */
  updateAdminAppUserAPIURL(appUser:AppUser){
    return this.http.put<AppUser>(this.applicationService.URL_user+'users',appUser);
  }

  /**
   * Methode de suppression de utilisateur
   * @returns
   */
  deleteAdminAppUserAPIURL(id:number){
    return this.http.delete<any>(`${this.applicationService.URL_user}configs/${id}`);
  }

  postNewUser(data: any) {
    return this.http.post<AppUser>("http://"+this.applicationService.URL_user+'register',data);
  }
}
