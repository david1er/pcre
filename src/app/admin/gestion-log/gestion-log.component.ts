import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ServiceAdminGestionLogService from './services/service-admin-gestion-log.service';

@Component({
  selector: 'app-gestion-log',
  templateUrl: './gestion-log.component.html',
  styleUrls: ['./gestion-log.component.css']
})
export default class GestionLogComponent implements OnInit {
  token:any;
  loading!: boolean;
  IppDetails!: void;
  errorMessage: any;
  ipAddress!:string;
  table_location:any;
  today:Date=new Date();


  constructor(private serviceAdminGestionLogService:ServiceAdminGestionLogService,
    private router:Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if (this.token == null) {
      this.router.navigateByUrl('/admin/login');
    }

    this.getIP();
    this.today;
  }

  getIP(){
    this.loading = true;
    this.serviceAdminGestionLogService.getIP().subscribe((data: any) => {
      this.table_location=data;
    });
  }
}

