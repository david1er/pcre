import { getLocaleDayNames } from "@angular/common";

export class AppUser{
    id:number;
    username:string;
    password:string;
    confirmedPassword: string;
    actived:boolean;
    rolename:number;

  constructor(id: number, username:string, password:string,confirmedPassword:string,actived:boolean,rolename:number) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.confirmedPassword = confirmedPassword;
    this.actived = actived;
    this.rolename = rolename;
  }
getName():string{
    return '${this.name}';
}
}
