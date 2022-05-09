import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/application.service';
import {SidebarModule } from 'ng-cdbangular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  token:any;
  isAuth: any;

  constructor(public applicationService:ApplicationService,private router:Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    console.log(this.token)
    if (this.token == null) {
      this.router.navigateByUrl('/admin/login');
    }

    this.isAuthenticated();
  }

  

  isAuthenticated(){
    this.isAuth=this.applicationService.getUser();
   console.log("is auth===>",this.applicationService.getUser());
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  //Autre methode logout relié a app.component
  logout() { 
   
    this.applicationService.logout();
   
  }

}
