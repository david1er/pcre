import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  public URL = "127.0.0.1:8030/api/v1/";
  public URL_user = "127.0.0.1:8030/";
  public URL_node = "http://127.0.0.1:3500/api/v1/examens/";

  constructor() { }
}
