import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ResultatService } from 'src/app/admin/resultat.service';
import { DatePublicationGenerale } from 'src/app/Model/DatePublicationGenerale';
import { Examen } from 'src/app/Model/Examen';
import { ResultatExamen } from 'src/app/Model/Resultat';

@Component({
  selector: 'app-consultation-baci',
  templateUrl: './consultation-baci.component.html',
  styleUrls: ['./consultation-baci.component.css']
})
export class ConsultationBACIComponent implements OnInit {
  examens!:Examen[];
  examenSelected = 'CEPD';
  table_resultatExamen: ResultatExamen[]=[];
  modeResultat: any =0;
  numTable: number=0;
  type_enseignement: string="";
  zone: string="";

  date1: Date = new Date('03.30.2022');
  date2: Date = new Date('10.31.2022');
  currentDate: Date = new Date();
  show: boolean = false;
  

  table_datePub: DatePublicationGenerale[]=[];
  aujourdhui = moment().format('L');
 
  isNameSelected: boolean | undefined;
  selectInput(event:any) {
    let selected = event.target.value;
    this.examenSelected = event.target.value;
    //console.log("La selection",this.examenSelected);
  }
  constructor(private resultatService : ResultatService) { }

  ngOnInit(): void {
    this.examens=[
      new Examen(1,"CEPD"),
      new Examen(2,"BEPC"),
      new Examen(3,"BACI"),
      new Examen(4,"BACII"),
      new Examen(5,"CAP"),
    ]
    
    //console.log('les examens=>',this.examens);
    //console.log('la dateeeeeee =>',this.currentDate);
    this.getDatePublicationGeneraleAll();
    this.calculDatePublication();
    this.aujourdhui;
    this.compareDates();
  }

  /**
   * Methode d'affichage des DatePublicationGenerale
  */
    getDatePublicationGeneraleAll(){
      let startDate =new Date(this.aujourdhui);
      let endDate = new Date("2022-05-10");
      //console.log("dataaaaa=====**************=========");
      this.resultatService.getAPIDataPub().toPromise().then(data=>{
        console.log("da2=====**************=========",data);
        this.table_datePub=data;
        this.table_datePub.forEach((line) => { 
          if(new Date(line.date_publicationGeneraleDebut).getTime()<=startDate.getTime() && startDate.getTime()<=new Date(line.date_publicationGeneraleFin).getTime() ){
            //console.log("lineDebut---------------",new Date(line.date_publicationGeneraleDebut).getTime()); 
            //console.log("lineFin---------------",new Date(line.date_publicationGeneraleFin).getTime());
            this.show = !this.show; 
          }else{
            //console.log("la date startdate",startDate.getTime());
            //console.log("la date string startdate",startDate);
            this.show = this.show; 
          }
          
          
          
        });
    })
  };

  compareDates(){
    if(this.date1.getTime()<=this.currentDate.getTime() && this.currentDate.getTime()<= this.date2.getTime() ){
     // console.log("date1 < current date< date2",this.currentDate.getTime())
    }
    if(this.date1.getTime()>this.currentDate.getTime()){
     // console.log("date1 > current date")
    }
  }
  
  calculDatePublication(){
    

  }
 
  
  onSelectionChanged(selectionChange:any) {
    //console.log('valeur changement=>',selectionChange);
   
  }

  getResult(){
      //console.log("BACI");
      this.resultatService.getResultBACIAPIUrl(this.numTable,this.type_enseignement).toPromise().then(data=>{
        //console.log('recherche BACI',data);
        
        this.table_resultatExamen=data;
        this.modeResultat=1;
      })    
  } 
}
