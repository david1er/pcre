import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { Examen } from 'src/app/Model/Examen';
import { FicheExamenCEPD } from 'src/app/Model/FicheExamenCEPD';
import { FicheExamenBEPC } from 'src/app/Model/FicheExamenBEPC';
import { FicheExamenBACI } from 'src/app/Model/FicheExamenBACI';
import { ResultatService } from '../resultat.service';

@Component({
  selector: 'app-import-file',
  templateUrl: './import-file.component.html',
  styleUrls: ['./import-file.component.css']
})

export class ImportFileComponent implements OnInit {
  csvRecords: any;
  header = false;
  message:string="";
  
  id_fiche_examen: number=0;
  annee: number=0;
  centre_decrit: string="";
  date_naissance: Date=new Date();
  decision: string="";
  ets_provenance: string="";
  examen: string="";
  jury: number=0;
  lieu_naiss: string="";
  mention: string="";
  moyenne: number=0;
  nom_prenom: string="";
  num_table: number=0;
  region: string="";
  serie_filiere: string="";
  session: string="";
  sexe: string="";
  type_enseignement: string="";
  newFicheExamenCEPD = new FicheExamenCEPD(this.id_fiche_examen,this.annee,this.centre_decrit,this.date_naissance,this.decision,this.ets_provenance,this.examen,this.jury,this.lieu_naiss,this.mention,this.moyenne,this.nom_prenom,this.num_table,this.region,this.serie_filiere,this.session,this.sexe,this.type_enseignement);
  newFicheExamenBEPC = new FicheExamenBEPC(this.id_fiche_examen,this.annee,this.centre_decrit,this.date_naissance,this.decision,this.ets_provenance,this.examen,this.jury,this.lieu_naiss,this.mention,this.moyenne,this.nom_prenom,this.num_table,this.region,this.serie_filiere,this.session,this.sexe,this.type_enseignement);
  newFicheExamenBACI = new FicheExamenBACI(this.id_fiche_examen,this.annee,this.centre_decrit,this.date_naissance,this.decision,this.ets_provenance,this.examen,this.jury,this.lieu_naiss,this.mention,this.moyenne,this.nom_prenom,this.num_table,this.region,this.serie_filiere,this.session,this.sexe,this.type_enseignement);
  
  examens!:Examen[];
  examenSelected = 'CEPD';

  selectInput(event:any) {
    let selected = event.target.value;
    this.examenSelected = event.target.value;
    console.log("La selection",this.examenSelected);
  }
  
    
  
  constructor(private resultatService: ResultatService,private ngxCsvParser: NgxCsvParser) { }
  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;

  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {
    console.log("info sur csv 1");
    // Select the files from the event
    const files = $event.srcElement.files;

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe({
        next: (result): void => {
          console.log("info sur csv 2");
          console.log('Result', result);
          console.log("info sur csv 3");
          this.csvRecords = result;
          console.log("fin de vie 3/2",result);
          console.log("fin de vie 3/3",this.csvRecords);
          this.csvRecords.forEach((line: any) =>{
            console.log("huuuummm ligne===>",line); 
              if(this.examenSelected == 'CEPD'){
                this.resultatService.postAdminCEPDAPIURL(this.newFicheExamenCEPD).toPromise().then(line=>{
                  console.log("les infos de ligne CEPD===>",line); 
                },(error:HttpErrorResponse)=>{console.log(error.message);console.log("errrrreeeeeeuuuuuuuurrrrr CEPD----",line); })
             
              }
              if(this.examenSelected == 'BEPC'){
                this.resultatService.postAdminBEPCAPIURL(this.newFicheExamenBEPC).toPromise().then(line=>{
                  console.log("les infos de ligne BEPC===>",line); 
                },(error:HttpErrorResponse)=>{console.log(error.message);console.log("errrrreeeeeeuuuuuuuurrrrr BEPC----",line); })
              }
              if(this.examenSelected == 'BACI'){ 
                this.resultatService.postAdminBACIAPIURL(this.newFicheExamenBACI).toPromise().then(line=>{
                console.log("les infos de ligne BACI===>",line); 
              },(error:HttpErrorResponse)=>{console.log(error.message);console.log("errrrreeeeeeuuuuuuuurrrrr BACI----",line); })
            }
              if(this.examenSelected == 'BACII'){}
               
             //this.addFicheExamenBEPC();
            console.log("** *********");
            
          });
        },
        error: (error: NgxCSVParserError): void => {
          console.log("info sur csv 4");
          console.log('Error', error);
        }
      });
    }


  ngOnInit(): void {
    this.examens=[
      new Examen(1,"CEPD"),
      new Examen(2,"BEPC"),
      new Examen(3,"BACI"),
      new Examen(4,"BACII"),
      new Examen(5,"CAP"),
    ]
    
  }

    /**
 * Methode d'ajout de FicheExamenBEPC
 */
  addFicheExamenBEPC(){
    this.resultatService.postAdminBEPCAPIURL(this.newFicheExamenBEPC).toPromise().then(data=>{
      console.log("la ligne d'info ===>",data); 
    },(error:HttpErrorResponse)=>{alert(error.message);})
  };

}
