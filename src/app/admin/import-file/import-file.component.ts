import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-file',
  templateUrl: './import-file.component.html',
  styleUrls: ['./import-file.component.css']
})

export class ImportFileComponent implements OnInit {
  fileUtil: any;
  utilService: any;
  csvRecords: any;
  external_contacts_arr: any;
  
  constructor() { }
  //array varibales to store csv data
  lines = []; //for headings
  linesR = []; // for rows
  
  

  //File upload function
  changeListener(files: FileList){
    console.log(files);
   //  if(files && files.length > 0) {
   //     let file : File = files.item(0); 
   //       console.log(file.name);
   //       console.log(file.size);
   //       console.log(file.type);
   //       let reader: FileReader = new FileReader();
   //       reader.readAsText(file);
   //       reader.onload = (e) => {
   //        let csv: any = reader.result;
   //        let allTextLines = [];
   //        allTextLines = csv.split(/\r|\n|\r/);
   //       // console.log(allTextLines);

   //       //Table Headings
   //        let headers = allTextLines[0].split(';');
   //        let data = headers;
   //        let tarr = [];
   //        for (let j = 0; j < headers.length; j++) {
   //          tarr.push(data[j]);
   //        }
   //        //Pusd headinf to array variable
   //        this.lines.push(tarr);
          
         
   //        // Table Rows
   //        let tarrR = [];

   //        //Create formdata object
   //        var myFormData = new FormData();
   //        let arrl = allTextLines.length;
   //        let rows = [];
          
   //        for(let i = 1; i < arrl; i++){
   //        rows.push(allTextLines[i].split(';'));
   //        if(allTextLines[i]!=""){

   //        // Save file data into formdata varibale  
   //        myFormData.append("data"+i, allTextLines[i]);
   //      }
   //        }
         
   //        for (let j = 0; j < arrl; j++) {
           
            
             
   //            tarrR.push(rows[j]);
   //            tarrR = tarrR.filter(function(i){ return i != ""; });

              
              
   //            // Begin assigning parameters
             
              
              
             
           
   //        }
   //       //Push rows to array variable
   //        this.linesR.push(tarrR);

   //        //Sending post request with data to php file
   //        return this.http.post('http://localhost/mypage.php/'
   //              , myFormData).subscribe((res: Response) => {
   //            console.log("User Registration has been done.");
                
                
                  
   //            });

          
   //    }
   //  }
  }

  
  ngOnInit(): void {
    
  }

  CSVConstants = {
    tokenDelimeter: ",",
    isHeaderPresentFlag: true,
    validateHeaderAndRecordLengthFlag: true,
    valildateFileExtenstionFlag: true,
 }
 
 public csvChanged(event:any) {
     var files = event.target.files;
 
     if (this.CSVConstants.validateHeaderAndRecordLengthFlag) {
       console.log("entrer dans 1");
         if (!this.fileUtil.isCSVFile(files[0])) {
             this.utilService.showToastMsg("error", "Veuillez importer un fichier valide");
             this.fileReset();
             console.log("entrer dans 2");
             return;
         }
     }
 
     var input = event.target;
     var reader = new FileReader();
     reader.readAsText(input.files[0]);
 
     reader.onload = (data) => {
         let csvData: any = reader.result;
         let csvRecordsArray = csvData.split(/\r\n|\n/);
 
         var headerLength = -1;
         if (this.CSVConstants.isHeaderPresentFlag) {
             let headersRow = this.fileUtil.getHeaderArray(csvRecordsArray, this.CSVConstants.tokenDelimeter);
             headerLength = headersRow.length;
             console.log("entrer dans 3");
         }
 
         this.csvRecords = this.fileUtil.getDataRecordsArrayFromCSVFile(csvRecordsArray,
             headerLength, this.CSVConstants.validateHeaderAndRecordLengthFlag, this.CSVConstants.tokenDelimeter);
 
         if (this.csvRecords == null) {
             //If control reached here it means csv file contains error, reset file.
             console.log("4 ligne erreur detecté");
             this.fileReset();
         }
 
         /* Remove the file so that user can upload same one after making changes, otherwise change event
             will not be called */
         this.clearFile();
 
         /* Remove the first header row */
         this.csvRecords.splice(0, 1);
 
         this.csvRecords.map((record: any) => {
          console.log("entrer dans 5 le map faux de mail");
             this.external_contacts_arr.push({
                 email: record[0],
                 first_name: record[1],
                 last_name: record[2],
                 designation: record[3],
             })
         });
         this.removeBlankRecords();
         //document.getElementById(`${this.uniquePrefix}-other-tab`).click();
     }
 
     reader.onerror = () => {
         this.utilService.showToastMsg("error", 'Unable to read ' + input.files[0]);
         console.log("entrer dans 6");
     };
 }
  removeBlankRecords() {
    throw new Error('Method not implemented.');
    console.log("entrer dans 7");
  }
  clearFile() {
    throw new Error('Method not implemented.');
    console.log("entrer dans 8");
  }
  fileReset() {
    throw new Error('Method not implemented.');
    console.log("entrer dans 9");
  }
}
