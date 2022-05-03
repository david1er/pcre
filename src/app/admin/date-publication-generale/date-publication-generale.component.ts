import { Component, OnInit } from '@angular/core';
import { DatePublicationGenerale } from 'src/app/Model/DatePublicationGenerale';
import { ResultatService } from '../resultat.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceAdminDatePubGeneraleService } from './services/service-admin-date-pub-generale.service';

@Component({
  selector: 'app-date-publication-generale',
  templateUrl: './date-publication-generale.component.html',
  styleUrls: ['./date-publication-generale.component.css']
})
export class DatePublicationGeneraleComponent implements OnInit {
  message: string="";
  examen: string="";
  etat: string="";

  show:boolean=true;
  
  date_publicationGeneraleDebut!: Date;
  date_publicationGeneraleFin!: Date;
  
  table_datePub: DatePublicationGenerale[]=[];
  idDatePublicationGenerale:number=0;
  newDatePubGenerale = new DatePublicationGenerale(this.idDatePublicationGenerale,this.date_publicationGeneraleDebut,this.date_publicationGeneraleFin);
  
  editDatePublicationGenerale : DatePublicationGenerale|undefined;

  constructor(
    private resultatService : ResultatService,
    private serviceAdminDatePubGeneraleService: ServiceAdminDatePubGeneraleService) { }

  ngOnInit(): void {
    this.getDatePublicationGeneraleAll();
    this.afficheValider();
    
  }
  /**
   * Methode d'affichage des DatePublicationGenerale
  */
   getDatePublicationGeneraleAll(){
    this.serviceAdminDatePubGeneraleService.getAPIDataPub().toPromise().then(data=>{
      console.log("dataaaaa==============",data);
      this.table_datePub=data;
      this.table_datePub.forEach((line) => { 
        console.log("tableconfiggg",this.table_datePub);
      if(line){
        this.show=!this.show;
        console.log("affiche ==== >",this.show);
      }else{
        this.show=this.show;
        console.log("affiche sinon ==== >",this.show);
      }
      });
      
  })
};

/**
 * Methode d'ajout des DatePublicationGenerale
 */
  addDatePublicationGenerale(){
    this.serviceAdminDatePubGeneraleService.postAdminDatePublicationGeneraleAPIURL(this.newDatePubGenerale).toPromise().then(data=>{
      this.message="Date de publication de "+this.newDatePubGenerale.idDatePublicationGenerale+" bien enrégistré";
      console.log("les infos===>",data);
      window.setTimeout(function(){location.reload()},2000)
    })
  };
/**
 * Methode de modification des DatePublicationGenerale
 */
 updateDatePublicationGenerale(datePub:DatePublicationGenerale){
  console.log("les infos===>",datePub);
  this.serviceAdminDatePubGeneraleService.updateAdminDatePublicationGeneraleAPIURL(datePub).toPromise().then(datePub=>{
    this.message="Date de publication bien enrégistrée";
    window.setTimeout(function(){location.reload()},2000)
  },(error:HttpErrorResponse)=>{alert(error.message);})
};
/**
 * Methode de suppression de DatePublicationGenerale
 * @param datePub
 */
  deleteDatePublicationGenerale(datePub:DatePublicationGenerale){
    let conf = confirm("Voulez-vous réelement supprimer cette information?");
    if (conf){
    this.serviceAdminDatePubGeneraleService.deleteAdminDatePublicationGeneraleAPIURL(datePub.idDatePublicationGenerale).toPromise().then(()=>{
      this.message="Information supprimé avec succès";
      console.log("supprimer ooooh===>");
      this.deleteDatePublicationGeneraleOfTable(datePub);
     // window.location.reload();
    });
  }
  };

  deleteDatePublicationGeneraleOfTable(cf:DatePublicationGenerale){
    this.table_datePub.forEach((cur,index)=>{
      if(cf.idDatePublicationGenerale===cur.idDatePublicationGenerale){
        this.table_datePub.splice(index,1)
      }
    })

  }

  /**
   * Methode de gestion de fenetre modale de modification 
   * @param datePub
   */
  openModal(datePub:DatePublicationGenerale){
    const container = document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    this.editDatePublicationGenerale=datePub;
    console.log("le editConffff====>",datePub);
    button.setAttribute('data-toogle','modal'); 
    container?.appendChild(button);
    button.click();
  }

  /**
   * Methode d'affichage ou non du bouton de validation de la date de publication générale
   */
  afficheValider(){
    console.log("la verification de bouton");
    
  }
}
