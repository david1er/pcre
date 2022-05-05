import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/application.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAuth: any;

  constructor(public applicationService:ApplicationService) { }

  ngOnInit(): void {
    this.isAuthenticated();
  }

  

  isAuthenticated(){
   this.isAuth = this.applicationService.getUser();
   console.log("is auth===>",this.isAuth);
  }

  getUser(): any {
    return localStorage.getItem('username');
  }
}
