import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
//import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    // this.router.events
    // .pipe(filter((event)=>event instanceof NavigationEnd))
    // .subscribe((event)=>{
    //   console.log(event);
    // });
    
    // throw new Error('Method not implemented.');
  }
  title = 'Résultats des examens - Ministre des Enseignements Primaire , Secondaire, Technique et de l\'Artisanat';
}
