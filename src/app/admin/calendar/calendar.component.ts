import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
token:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if (this.token == null) {
      this.router.navigateByUrl('/admin/login');
    }
  }

}
