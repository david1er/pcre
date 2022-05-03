import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ResultatExamen } from '../../Model/Resultat'
import { ResultatService } from '../resultat.service';
import { Region } from 'src/app/Model/Region';
import { Examen } from 'src/app/Model/Examen';
import { ServiceAdminResultatCEPDService } from './services/service-admin-resultat-cepd.service';
import { ServiceAdminResultatBEPCService } from './services/service-admin-resultat-bepc.service';
import { ServiceAdminResultatBACIService } from './services/service-admin-resultat-baci.service';
import { ServiceAdminResultatBACIIService } from './services/service-admin-resultat-bacii.service';

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
  num_table: number=0;
  annee: number=0;
  nom_prenom: string="";
  region: string="";
  type_enseignement: string="";
  examen: string="";
  zone: string="";

  isNameSelected: boolean | undefined;
  selectInput(event:any) {
    let selected = event.target.value;
    this.examenSelected = event.target.value;
    console.log("La selection",this.examenSelected);
  }
  //private resultatExamenListUrl = 'http://localhost:3001/api/region/get-region';
  constructor(
    private resultatService : ResultatService,
    private resultatAdminCEPDService:ServiceAdminResultatCEPDService,
    private resultatAdminBEPCService:ServiceAdminResultatBEPCService,
    private resultatAdminBACIService:ServiceAdminResultatBACIService,
    private resultatAdminBACIIService:ServiceAdminResultatBACIIService,
    ) { 
    
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
  ////this.num_table=parseInt((<HTMLInputElement>document.getElementById("num_table")).value);
  console.log('annee===>',this.annee);
  console.log('nom===>',this.nom_prenom);
  console.log('examen===>',this.examen);
  console.log('region===>',this.region);
  if(this.examenSelected=='CEPD'){
    if((this.annee != 0) && (this.examen != "") && (this.num_table != 0) && (this.region == "") && (this.nom_prenom == "")){
      console.log("dans CEPD1 le numtable==>",this.num_table);
      console.log("dans CEPD1 le annee==>",this.annee);
      console.log("dans CEPD1 le nom_prenom==>",this.nom_prenom);
      this.resultatAdminCEPDService.getResultAdminCEPD1APIUrl(this.annee,this.examen,this.num_table).toPromise().then(data=>{
        console.log('recherche CEPD1 U===>',data);
      
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
    }
    else if(this.annee!=0 && this.nom_prenom!=""){
      this.resultatAdminCEPDService.getResultAdminCEPD3APIUrl(this.annee,this.nom_prenom).toPromise().then(data=>{
        console.log('recherche CEPD3 T===>',data);
        
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
    }
    else if(this.examen != "" && this.annee != 0 && this.nom_prenom != ""){
      this.resultatAdminCEPDService.getResultAdminCEPD4APIUrl(this.annee,this.examen,this.nom_prenom).toPromise().then(data=>{
        console.log('recherche CEPD4 Q===>',data);
        
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
  
    }
    else if(this.examen!="" && this.annee!=0 && this.region==" "){
      this.resultatAdminCEPDService.getResultAdminCEPD5APIUrl(this.annee,this.examen).toPromise().then(data=>{
        console.log('recherche CEPD5 C===>',data);
        
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
  
    }else if((this.annee != 0) && (this.examen != "") && (this.region != "") && (this.num_table != 0) && (this.nom_prenom == "")){
      console.log("dans CEPD1 le numtable==>",this.num_table);
      console.log("dans CEPD1 le annee==>",this.annee);
      console.log("dans CEPD1 le region==>",this.region);
      this.resultatAdminCEPDService.getResultAdminCEPD6APIUrl(this.annee,this.examen,this.region,this.num_table).toPromise().then(data=>{
        console.log('recherche CEPD6 S===>',data);
      
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
    }
    else{
      this.table_resultatExamen=[];
    }
  }if(this.examenSelected=='BEPC'){
    alert("bepcc");
    if((this.annee != 0) && (this.examen != "") && (this.num_table != 0) && (this.nom_prenom == "")){
      console.log("dans BEPC1 le numtable==>",this.num_table);
      console.log("dans BEPC1 le annee==>",this.annee);
      console.log("dans BEPC1 le nom_prenom==>",this.nom_prenom);
      this.resultatAdminBEPCService.getResultAdminBEPC1APIUrl(this.annee,this.examen,this.num_table).toPromise().then(data=>{
        console.log('recherche BEPC1 U===>',data);
      
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
    }
    else if(this.annee!=0 && this.nom_prenom!=""){
      this.resultatAdminBEPCService.getResultAdminBEPC3APIUrl(this.annee,this.nom_prenom).toPromise().then(data=>{
        console.log('recherche BEPC3 T===>',data);
        
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
    }
    else if(this.examen != "" && this.annee != 0 && this.nom_prenom != ""){
      this.resultatAdminBEPCService.getResultAdminBEPC4APIUrl(this.annee,this.examen,this.nom_prenom).toPromise().then(data=>{
        console.log('recherche BEPC4 Q===>',data);
        
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
  
    }
    else if(this.examen!="" && this.annee!=0 && this.region==" "){
      this.resultatAdminBEPCService.getResultAdminBEPC5APIUrl(this.annee,this.examen).toPromise().then(data=>{
        console.log('recherche BEPC5 C===>',data);
        
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
  
    }
    else{
      this.table_resultatExamen=[];
    }

  }if(this.examenSelected=='BACI'){
    alert("baci");
    if((this.annee != 0) && (this.examen != "") && (this.num_table != 0) && (this.nom_prenom == "")){
      console.log("dans BACI1 le numtable==>",this.num_table);
      console.log("dans BACI1 le annee==>",this.annee);
      console.log("dans BACI1 le nom_prenom==>",this.nom_prenom);
      this.resultatAdminBACIService.getResultAdminBACI1APIUrl(this.annee,this.examen,this.num_table).toPromise().then(data=>{
        console.log('recherche BACII1 U===>',data);
      
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
    }
    else if(this.annee!=0 && this.nom_prenom!=""){
      this.resultatAdminBACIService.getResultAdminBACI3APIUrl(this.annee,this.nom_prenom).toPromise().then(data=>{
        console.log('recherche BACI3 T===>',data);
        
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
    }
    else if(this.examen != "" && this.annee != 0 && this.nom_prenom != ""){
      this.resultatAdminBACIService.getResultAdminBACI4APIUrl(this.annee,this.examen,this.nom_prenom).toPromise().then(data=>{
        console.log('recherche BACI4 Q===>',data);
        
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
  
    }
    else if(this.examen!="" && this.annee!=0 && this.region==" "){
      this.resultatAdminBACIService.getResultAdminBACI5APIUrl(this.annee,this.examen).toPromise().then(data=>{
        console.log('recherche BACI5 C===>',data);
        
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
  
    }
    else{
      this.table_resultatExamen=[];
    }
  }if(this.examenSelected=='BACII'){
    alert("bacii");
    if((this.annee != 0) && (this.examen != "") && (this.num_table != 0) && (this.nom_prenom == "")){
      console.log("dans BACII1 le numtable==>",this.num_table);
      console.log("dans BACII1 le annee==>",this.annee);
      console.log("dans BACII1 le nom_prenom==>",this.nom_prenom);
      this.resultatAdminBACIIService.getResultAdminBACII1APIUrl(this.annee,this.examen,this.num_table).toPromise().then(data=>{
        console.log('recherche BACII1 U===>',data);
      
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
    }
    else if(this.annee!=0 && this.nom_prenom!=""){
      this.resultatAdminBACIIService.getResultAdminBACII3APIUrl(this.annee,this.nom_prenom).toPromise().then(data=>{
        console.log('recherche BACII3 T===>',data);
        
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
    }
    else if(this.examen != "" && this.annee != 0 && this.nom_prenom != ""){
      this.resultatAdminBACIIService.getResultAdminBACII4APIUrl(this.annee,this.examen,this.nom_prenom).toPromise().then(data=>{
        console.log('recherche BACII4 Q===>',data);
        
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
  
    }
    else if(this.examen!="" && this.annee!=0 && this.region==" "){
      this.resultatAdminBACIIService.getResultAdminBACII5APIUrl(this.annee,this.examen).toPromise().then(data=>{
        console.log('recherche BACII5 C===>',data);
        
        this.table_resultatExamen=data;
      },(error:HttpErrorResponse)=>{alert(error.message);})
  
    }
    else{
      this.table_resultatExamen=[];
    }
  }else{
    alert("ohooooo");
  }



  // if(this.annee!=0 && this.examen!="" && this.num_table!=0 && this.nom_prenom==""){
  //   console.log("dans un le numtable==>",this.num_table)
  //   this.resultatService.getResultAdminUAPIUrl(this.annee,this.examen,this.num_table).toPromise().then(data=>{
  //     console.log('recherche U===>',data);
      
  //     this.table_resultatExamen=data;
  //   },(error:HttpErrorResponse)=>{alert(error.message);})
  // }
  // else if(this.annee!=0 && this.nom_prenom!=""){
  //   this.resultatService.getResultAdminTAPIUrl(this.annee,this.nom_prenom).toPromise().then(data=>{
  //     console.log('recherche T===>',data);
      
  //     this.table_resultatExamen=data;
  //   },(error:HttpErrorResponse)=>{alert(error.message);})
  // }
  // else if(this.examen!="" && this.annee!=0 && this.nom_prenom!=""){
  //   this.resultatService.getResultAdminQAPIUrl(this.annee,this.examen,this.nom_prenom).toPromise().then(data=>{
  //     console.log('recherche Q===>',data);
      
  //     this.table_resultatExamen=data;
  //   },(error:HttpErrorResponse)=>{alert(error.message);})

  // }
  // else if(this.examen!="" && this.annee!=0){
  //   this.resultatService.getResultAdminCAPIUrl(this.annee,this.examen).toPromise().then(data=>{
  //     console.log('recherche C===>',data);
      
  //     this.table_resultatExamen=data;
  //   },(error:HttpErrorResponse)=>{alert(error.message);})

  // }
  // else{
  //   this.table_resultatExamen=[];
  // }
  
  
} 

}
