import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ResultatService } from '../admin/resultat.service';
import { DatePublicationGenerale } from '../Model/DatePublicationGenerale';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  isShown: boolean = false;
  table_datePub: DatePublicationGenerale[]=[];
  aujourdhui = moment().format('L');
  constructor(private resultatService : ResultatService) { }

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
}
