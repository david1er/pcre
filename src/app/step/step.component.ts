import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ServiceAdminConfigPublicationService } from '../admin/config-publication/services/service-admin-config-publication.service';
import { ResultatService } from '../admin/resultat.service';
import { Config } from '../Model/Config';
import { DatePublicationGenerale } from '../Model/DatePublicationGenerale';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  isShown: boolean = false;
  table_datePub: DatePublicationGenerale[]=[];
  table_config: Config[]=[];
  aujourdhui = moment().format('L');
  constructor(private resultatService : ResultatService,private serviceAdminConfigPublicationService:ServiceAdminConfigPublicationService ) { }

  ngOnInit(): void {
    this.getDatePublicationGeneraleAll();
    this.aujourdhui;
  }

  /**
   * Methode d'affichage des DatePublicationGenerale
  */
   getDatePublicationGeneraleAll(){
    let startDate =new Date(this.aujourdhui);
    let endDate = new Date("2022-05-10");
    this.resultatService.getAPIDataPub().toPromise().then(data=>{
      console.log("dataaaaa==============",data);
      this.table_datePub=data;
      this.table_datePub.forEach((line) => { 
        if(new Date(line.date_publicationGeneraleDebut).getTime()<=startDate.getTime() && startDate.getTime()<=new Date(line.date_publicationGeneraleFin).getTime() ){
          console.log("lineDebut---------------",new Date(line.date_publicationGeneraleDebut).getTime()); 
          console.log("lineFin---------------",new Date(line.date_publicationGeneraleFin).getTime());
          this.isShown = this.isShown; 
        }else{
          console.log("la date startdate",startDate.getTime());
          console.log("la date string startdate",startDate);
          this.isShown = !this.isShown; 
        }
      });
  })
};

/**Date d'affichage des step suivant chaque examen */
  /**
   * Methode d'affichage des configs
  */
   getCongifAll(){
    let debutDateJ =new Date(this.aujourdhui);
    this.serviceAdminConfigPublicationService.getAPIData2().toPromise().then(data=>{
      this.table_config=data;
      this.table_config.forEach((lineConfig) => { 
        /* if(new Date(lineConfig.date_publicationGeneraleDebut).getTime()<=debutDateJ.getTime() && debutDateJ.getTime()<=new Date(line.date_publicationGeneraleFin).getTime() ){
          console.log("lineDebut---------------",new Date(lineConfig.date_publicationGeneraleDebut).getTime()); 
          console.log("lineFin---------------",new Date(lineConfig.date_publicationGeneraleFin).getTime());
          this.isShown = this.isShown; 
        }else{
          console.log("la date startdate",debutDateJ.getTime());
          console.log("la date string startdate",debutDateJ);
          this.isShown = !this.isShown; 
        } */
      }
      );

  },(error:HttpErrorResponse)=>{alert(error.message);})
};



}
