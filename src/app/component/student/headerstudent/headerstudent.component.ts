import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerstudent',
  templateUrl: './headerstudent.component.html',
  styleUrls: ['./headerstudent.component.css']
})
export class HeaderstudentComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private route: Router) { }

  ngOnInit(): void {
    
  }
  onLogout() {
    localStorage.clear()
    this.route.navigateByUrl('/')
  }

}
