import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerprof',
  templateUrl: './headerprof.component.html',
  styleUrls: ['./headerprof.component.css']
})
export class HeaderprofComponent implements OnInit {
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
