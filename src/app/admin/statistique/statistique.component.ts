import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FicheExamenCEPD } from 'src/app/Model/FicheExamenCEPD';
import { ResultatExamen } from 'src/app/Model/Resultat';
import { ResultatService } from '../resultat.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  table_statistiqueCEPD:any;
  table_statistiqueBEPC:any;
  table_statistiqueBACI:any;
  table_statistiqueBACII:any;

  constructor(private resultatService : ResultatService) { }

  ngOnInit(): void {
    this.getStatCEPDAll();
    this.getStatBEPCAll();
    this.getStatBACIAll();
    this.getStatBACIIAll();
  }

   /**
   * Methode d'affichage des statistique
  */
    getStatCEPDAll(){
      this.resultatService.getStatCEPDAPIData().toPromise().then(data=>{
        this.table_statistiqueCEPD=data;
        console.log("les stats",this.table_statistiqueCEPD);
    },(error:HttpErrorResponse)=>{alert(error.message);})
  };
    getStatBEPCAll(){
      this.resultatService.getStatBEPCAPIData().toPromise().then(data=>{
        this.table_statistiqueBEPC=data;
        console.log("les stats",this.table_statistiqueBEPC);
    },(error:HttpErrorResponse)=>{alert(error.message);})
  };
    getStatBACIAll(){
      this.resultatService.getStatBACIAPIData().toPromise().then(data=>{
        this.table_statistiqueBACI=data;
        console.log("les stats",this.table_statistiqueBACI);
    },(error:HttpErrorResponse)=>{alert(error.message);})
  };
    getStatBACIIAll(){
      this.resultatService.getStatBACIIAPIData().toPromise().then(data=>{
        this.table_statistiqueBACII=data;
        console.log("les stats",this.table_statistiqueBACII);
    },(error:HttpErrorResponse)=>{alert(error.message);})
  };
}
