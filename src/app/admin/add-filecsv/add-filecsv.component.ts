import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultatExamen } from '../../Model/Resultat'
import { ResultatService } from '../resultat.service';
import { Region } from 'src/app/Model/Region';
import { Examen } from 'src/app/Model/Examen';

export interface GoogleVolumeListResponse {
  totalItems: number;
  items: Array<{
      volumeInfo: {
          title: string;
      }
  }>;
}

@Component({
  selector: 'app-add-filecsv',
  templateUrl: './add-filecsv.component.html',
  styleUrls: ['./add-filecsv.component.css']
})
export class AddFilecsvComponent implements OnInit {
  
  //resultatExamenCount: number;

  //resultatExamenList: any[]=[];
  table_resultatExamen: ResultatExamen[]=[];
  regions!:Region[];
  examens!:Examen[];
  examenSelected = 'CEPD';
  numTable: number=0;
  annee: number=0;
  nom_prenom: string="";
  region: string="";
  examen: string="";
  zone: string="";

  isNameSelected: boolean | undefined;
  selectInput(event:any) {
    let selected = event.target.value;
    this.examenSelected = event.target.value;
    console.log("La selection",this.examenSelected);
  }
  //private resultatExamenListUrl = 'http://localhost:3001/api/region/get-region';
  constructor(private resultatService : ResultatService) { 
    
  }
  
  ngOnInit(): void {
    this.regions=[
      new Region(1,"GOLFE"),
      new Region(2,"MARITIME"),
      new Region(3,"PLATEAUX EST"),
      new Region(4,"PLATEAUX OUEST"),
      new Region(5,"CENTRALE"),
      new Region(6,"KARA"),
      new Region(7,"SAVANES"),
    ]
    this.examens=[
      new Examen(1,"CEPD"),
      new Examen(2,"BEPC"),
      new Examen(3,"BACI"),
      new Examen(4,"BACII"),
      new Examen(5,"CAP"),
    ]




    this.getResultatExamen();
    console.log('ceci est tab',this.table_resultatExamen);
}

getResultatExamen(){
  this.resultatService.getAPIData().toPromise().then(data=>{
    console.log('ceci est les data',data);
    this.table_resultatExamen=data;
    
  })
};

/**
 * Methode ADMIN de recherche selon les critères
 */
getResultAdmin(){
  this.nom_prenom=(<HTMLInputElement>document.getElementById("nom_prenom")).value;
  //this.examen=(<HTMLInputElement>document.getElementById("examen")).value;
  //this.region=(<HTMLInputElement>document.getElementById("region")).value;
  this.annee=parseInt((<HTMLInputElement>document.getElementById("annee")).value);
  this.numTable=parseInt((<HTMLInputElement>document.getElementById("numTable")).value);
  console.log('annee===>',this.annee);
  console.log('nom===>',this.nom_prenom);
  console.log('examen===>',this.examen);
  if(this.annee!=0 && this.examen!=""){
    this.resultatService.getResultAdminUAPIUrl(this.annee,this.examen,this.numTable).toPromise().then(data=>{
      console.log('recherche U===>',data);
      
      this.table_resultatExamen=data;
    })
  }
  else if(this.annee!=0){
    this.resultatService.getResultAdminTAPIUrl(this.annee,this.nom_prenom).toPromise().then(data=>{
      console.log('recherche T===>',data);
      
      this.table_resultatExamen=data;
    })
  }
  else if(this.examen!="" && this.annee!=0 && this.nom_prenom!=""){
    this.resultatService.getResultAdminQAPIUrl(this.annee,this.examen,this.nom_prenom).toPromise().then(data=>{
      console.log('recherche Q===>',data);
      
      this.table_resultatExamen=data;
    })

  }
  
  
} 

}
