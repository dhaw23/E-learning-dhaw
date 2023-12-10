import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursService } from 'src/app/service/cours.service';

@Component({
  selector: 'app-coursstudentdetails',
  templateUrl: './coursstudentdetails.component.html',
  styleUrls: ['./coursstudentdetails.component.css']
})
export class CoursstudentdetailsComponent implements OnInit{
  cours:any;
 
  id = this.activateRoot.snapshot.params['id']
  constructor(private coursService:CoursService, private route: Router,private activateRoot:ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneCours();
  }

  getOneCours(){
    this.coursService.getOneCours(this.id).subscribe(
      (res:any)=>{
        this.cours=res;
        console.log("One Cours ",res)
      }
    )
  }
}
