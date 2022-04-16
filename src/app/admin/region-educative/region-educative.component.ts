import { Component, OnInit } from '@angular/core';
import {RegionEducative} from 'src/app/Model/RegionEducative'
@Component({
  selector: 'app-region-educative',
  templateUrl: './region-educative.component.html',
  styleUrls: ['./region-educative.component.css']
})
export class RegionEducativeComponent implements OnInit {
  table_region: RegionEducative[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
