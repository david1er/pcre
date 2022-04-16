import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Examen } from '../Model/Examen';
import { Region } from '../Model/Region';
import { ResultatService } from '../admin/resultat.service';
import { ResultatExamen } from '../Model/Resultat';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})


export class ResultatComponent implements OnInit {
  regions!:Region[];
  examens!:Examen[];
  examenSelected = 'CEPD';
  table_resultatExamen: ResultatExamen[]=[];
  numTable: number=0;
  zone: string="";
  @Output() selectionChange= new EventEmitter;

  isNameSelected: boolean | undefined;
  selectInput(event:any) {
    let selected = event.target.value;
    this.examenSelected = event.target.value;
    console.log("La selection",this.examenSelected);
  }



  constructor(private resultatService : ResultatService) { }

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
    console.log('les regions=>',this.regions);
    console.log('les examens=>',this.examens);
  }
 
  
  onSelectionChanged(selectionChange:any) {
    console.log('valeur changement=>',selectionChange);
    /* this.selectionChange.emit(
      selectionChange
     ); */
     /* if(selectionChange === 'CEPD') {
      console.log('DESACTIVONS');
    } else {
      console.log('ACTIVONS');
    } */
  }
  getResult(){
    if (this.zone!=""){
      this.resultatService.getResultAPIUrl(this.numTable,this.zone).toPromise().then(data=>{
        console.log('recherche',data);
        
        this.table_resultatExamen=data;
      })
    } else if(this.examenSelected=="BEPC"){
      console.log("BEEEEPPPPCCCCCC");
      this.resultatService.getResultBEPCAPIUrl(this.numTable).toPromise().then(data=>{
        console.log('recherche',data);
        
        this.table_resultatExamen=data;
      })
    } else{
      this.table_resultatExamen=[];
    }
    
  } 
  
}
