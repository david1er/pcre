import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/Model/Utilisateur';
import { ResultatService } from '../../resultat.service';
import { ServiceGestionUtilisateurService } from '../service-gestion-utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  message: string="";
  examen: string="";
  etat: string="";
  position:number=0;
  date_publicationDebut!: Date;
  date_publicationFin!: Date;
  
  appusers!:AppUser[];
  appUsers!:AppUser[];
  table_appUser: AppUser[]=[];
  id:number=0;
  username!: string;
  password!: string;
  role!: number;
  actived!: boolean;
  newAppUser = new AppUser(this.id,this.username,this.password,this.actived,this.role);
  
  editAppUser!:AppUser;
  ficheExamenList=[];

  myModal = document.getElementById('myModal')
  myInput = document.getElementById('myInput')
  
  

  constructor(private serviceGestionUtilisateurService : ServiceGestionUtilisateurService){}

  ngOnInit(): void {
    
    this.getAppUserAll();
    //this.addAppUser();
    

  }


  /**
   * Methode d'affichage des AppUser
  */
  getAppUserAll(){
    this.serviceGestionUtilisateurService.getAPIData().toPromise().then(data=>{
      this.table_appUser=data;
  },(error:HttpErrorResponse)=>{console.log(error.message);})
};

/**
 * Methode d'ajout des AppUser
 */
  addAppUser(){
    this.serviceGestionUtilisateurService.postAdminAppUserAPIURL(this.newAppUser).toPromise().then(appUser=>{
      this.message="Date de publication de "+this.newAppUser.username+" bien enrégistré";
      console.log("les infos===++++++++++++++++++++++++++++++++++++>",appUser);
      window.setTimeout(function(){location.reload()},2000)
    },(error:HttpErrorResponse)=>{console.log(error.message);})
  };

/**
 * Methode de modification des AppUser
 */
  updateAppUser(appUser:AppUser){
    console.log("les infos===>",appUser);
    this.serviceGestionUtilisateurService.updateAdminAppUserAPIURL(appUser).toPromise().then(appUser=>{
      this.message="Date de publication bien enrégistrée";
      window.setTimeout(function(){location.reload()},2000)
    },(error:HttpErrorResponse)=>{console.log(error.message);})
  };

/**
 * Methode de suppression de AppUser
 * @param AppUser 
 */
  deleteAppUser(appUser:AppUser){
    let conf = confirm("Voulez-vous réelement supprimer cette information?");
    if (conf){
    this.serviceGestionUtilisateurService.deleteAdminAppUserAPIURL(appUser.id).toPromise().then(()=>{
      this.message="Information supprimé avec succès";
      console.log("supprimer ooooh===>");
      this.deleteAppUserOfTable(appUser);
     // window.location.reload();
    });
  }
  };

  deleteAppUserOfTable(cf:AppUser){
    this.table_appUser.forEach((cur,index)=>{
      if(cf.id===cur.id){
        this.table_appUser.splice(index,1)
      }
    })

  }

  openModal(appUser:AppUser){
    const container = document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    this.editAppUser=appUser;
    console.log("le editConffff====>",appUser);
    button.setAttribute('data-toogle','modal'); 
    container?.appendChild(button);
    button.click();
  }
}


