import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-volume-list-response',
  templateUrl: './google-volume-list-response.component.html',
  styleUrls: ['./google-volume-list-response.component.css']
})

export class GoogleVolumeListResponseComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}

export interface GoogleVolumeListResponse {
  totalItems: number;
  items: Array<{
      volumeInfo: {
          title: string;
      }
  }>;
}
