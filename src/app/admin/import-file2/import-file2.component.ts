import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-import-file2',
  templateUrl: './import-file2.component.html',
  styleUrls: ['./import-file2.component.css']
})
export class ImportFile2Component implements OnInit {

  constructor(private http: HttpClient) { }
     //array varibales to store csv data
     lines = []; //for headings
     linesR = []; // for rows
     //File upload function
     changeListener(files: FileList){
       console.log(files);
       if(files && files.length > 0) {
          let file : any = files.item(0); 
            console.log(file.name);
            console.log(file.size);
            console.log(file.type);
            let reader: FileReader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
             let csv: any = reader.result;
             let allTextLines = [];
             allTextLines = csv.split(/\r|\n|\r/);
            // console.log(allTextLines);
            //Table Headings
             let headers = allTextLines[0].split(';');
             let data = headers;
             let tarr : any[]=[];
             for (let j = 0; j < headers.length; j++) {
               tarr.push(data[j]);
             }
             //Pusd headinf to array variable
             this.lines.push(tarr as never);
             
            
             // Table Rows
             let tarrR = [];
             //Create formdata object
             var myFormData = new FormData();
             let arrl = allTextLines.length;
             let rows = [];
             
             for(let i = 1; i < arrl; i++){
             rows.push(allTextLines[i].split(';'));
             if(allTextLines[i]!=""){
             // Save file data into formdata varibale  
             myFormData.append("data"+i, allTextLines[i]);
           }
             }
            
             for (let j = 0; j < arrl; j++) {
              
                 tarrR.push(rows[j]);
                 tarrR = tarrR.filter(function(i){ return i != ""; });
                 
                 // Begin assigning parameters 
              
             }
            //Push rows to array variable
             this.linesR.push(tarrR as never);
             //Sending post request with data to php file
      //        return this.http.post('http://localhost/mypage.php/'
      //              , myFormData).subscribe((res: Response) => {
      //            console.log("User Registration has been done.");
                   
                   
                     
      //            }); // 
     }
    }
  }
             

  ngOnInit(): void {
  }

}
