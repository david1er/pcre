import { getLocaleDayNames } from "@angular/common";

export class AppUser{
    id:number;
    username:string;
    password:string;
    actived:boolean;
    role:number;   

  constructor(id: number, username:string, password:string,actived:boolean,role:number) {
    this.id = id
    this.username = username
    this.password = password
    this.actived = actived
    this.role = role
  }
getName():string{
    return '${this.name}';
}
}