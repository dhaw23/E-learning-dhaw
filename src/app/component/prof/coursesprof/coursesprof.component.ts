import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursesprof',
  templateUrl: './coursesprof.component.html',
  styleUrls: ['./coursesprof.component.css']
})
export class CoursesprofComponent implements OnInit{
  constructor(private router:Router) {}
  ngOnInit(): void {
    this.navigate();
  }
  navigate(){
    this.router.navigateByUrl('/hometeacher/coursesprof/addcoursprof')
  }
}
