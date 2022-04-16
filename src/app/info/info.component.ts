import { Component, OnInit } from '@angular/core';
import { Config } from '../Model/Config';
import { ResultatService } from '../admin/resultat.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  table_config:Config[]=[];

  constructor(private resultatService : ResultatService) { }

  ngOnInit(): void {
    this.getCongifAll();
  }

  /**
   * Methode d'affichage des configs
  */
   getCongifAll(){
    this.resultatService.getAPIData2().toPromise().then(data=>{
      this.table_config=data;
  })
};

}
