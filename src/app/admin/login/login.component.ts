import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApplicationService} from "../../application.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  applicationService:ApplicationService, private router:Router) { }

  ngOnInit(): void {
    this.applicationService.loadToken();
    this.applicationService.parseJWT();
  }
  login(loginFormulaire:any){
    console.log('le formulaire',loginFormulaire.value);

    this.applicationService.login(loginFormulaire.value)
      .subscribe(resp=>{
        let jwt=resp.headers.get('Authorization');
        this.applicationService.saveToken(jwt);
        console.log("Succes");
        this.router.navigateByUrl("/admin/add-file");

      },err=>{
        console.log('Erreur');
      })
  }

 
}
