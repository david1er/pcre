import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import ServiceAdminGestionLogService from './services/service-admin-gestion-log.service';

@Component({
  selector: 'app-gestion-log',
  templateUrl: './gestion-log.component.html',
  styleUrls: ['./gestion-log.component.css']
})
export default class GestionLogComponent implements OnInit {
  loading!: boolean;
  IppDetails!: void;
  errorMessage: any;
  ipAddress!:string;
  table_location:any;
  today:Date=new Date();


  constructor(private serviceAdminGestionLogService:ServiceAdminGestionLogService) { }

  ngOnInit(): void {
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

