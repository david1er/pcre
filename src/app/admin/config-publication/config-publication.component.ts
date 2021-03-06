import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/Model/Examen';
import { Config } from 'src/app/Model/Config';
import { ResultatService } from '../resultat.service';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceAdminConfigPublicationService } from './services/service-admin-config-publication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-publication',
  templateUrl: './config-publication.component.html',
  styleUrls: ['./config-publication.component.css']
})
export class ConfigPublicationComponent implements OnInit {
  message: string="";
  examen: string="";
  etat: string="";
  position:number=0;
  date_publicationDebut!: Date;
  date_publicationFin!: Date;
  
  examens!:Examen[];
  configs!:Config[];
  table_config: Config[]=[];
  idConfig:number=0;
  newConfig = new Config(this.idConfig,this.examen,this.position,this.date_publicationDebut,this.date_publicationFin,this.etat);
  
  editConfig:Config | undefined;
  ficheExamenList=[];

  myModal = document.getElementById('myModal')
  myInput = document.getElementById('myInput')
  token:any;


  constructor(
    private resultatService : ResultatService,
    private serviceAdminConfigPublicationService: ServiceAdminConfigPublicationService,
    private router: Router ){}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if (this.token == null) {
      this.router.navigateByUrl('/admin/login');
    }
    this.examens=[
      new Examen(1,"CEPD"),
      new Examen(2,"BEPC"),
      new Examen(3,"BACI"),
      new Examen(4,"BACII"),
      new Examen(5,"CAP"),
    ]
    this.getCongifAll();
    //this.addConfig();
    

  }


  /**
   * Methode d'affichage des configs
  */
  getCongifAll(){
    this.serviceAdminConfigPublicationService.getAPIData2().toPromise().then(data=>{
      this.table_config=data;
  },(error:HttpErrorResponse)=>{alert(error.message);})
};

/**
 * Methode d'ajout des config
 */
  addConfig(){
    this.serviceAdminConfigPublicationService.postAdminConfigAPIURL(this.newConfig).toPromise().then(config=>{
      this.message="Date de publication de "+this.newConfig.examen+" bien enr??gistr??";
      console.log("les infos===++++++++++++++++++++++++++++++++++++>",config);
      window.setTimeout(function(){location.reload()},2000)
    },(error:HttpErrorResponse)=>{alert(error.message);})
  };

/**
 * Methode de modification des config
 */
  updateConfig(config:Config){
    console.log("les infos===>",config);
    this.serviceAdminConfigPublicationService.updateAdminConfigAPIURL(config).toPromise().then(config=>{
      this.message="Date de publication bien enr??gistr??e";
      window.setTimeout(function(){location.reload()},2000)
    },(error:HttpErrorResponse)=>{alert(error.message);})
  };

/**
 * Methode de suppression de config
 * @param config 
 */
  deleteConfig(config:Config){
    let conf = confirm("Voulez-vous r??element supprimer cette information?");
    if (conf){
    this.serviceAdminConfigPublicationService.deleteAdminConfigAPIURL(config.idConfig).toPromise().then(()=>{
      this.message="Information supprim?? avec succ??s";
      console.log("supprimer ooooh===>");
      this.deleteConfigOfTable(config);
     // window.location.reload();
    });
  }
  };

  deleteConfigOfTable(cf:Config){
    this.table_config.forEach((cur,index)=>{
      if(cf.idConfig===cur.idConfig){
        this.table_config.splice(index,1)
      }
    })

  }

  openModal(config:Config){
    const container = document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    this.editConfig=config;
    console.log("le editConffff====>",config);
    button.setAttribute('data-toogle','modal'); 
    container?.appendChild(button);
    button.click();
  }
}


