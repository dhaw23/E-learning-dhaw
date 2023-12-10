import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import { CoursService } from 'src/app/service/cours.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coursproflist',
  templateUrl: './coursproflist.component.html',
  styleUrls: ['./coursproflist.component.css']
})
export class CoursproflistComponent implements OnInit{
  cours: any;
  categories:any;
  p: number = 1;
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor( private categorieServise:CategoriesService,private coursService:CoursService, private route: Router) { }

  ngOnInit(): void {
    this.getAllCours();
  }

  getAllCours(){
    this.coursService.getAllcoursOfTeacher(this.userconnect.userId).subscribe(
      (res:any)=>{
        this.cours=res;
        console.log("cours list : ",this.cours)
        console.log("cours lenghth : ",this.cours.length)
      }
    )
  }

deleteCours(id:any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.coursService.deleteOneCours(id).subscribe(
          (res)=>{
            console.log("categorie deleted",res);
           
          }
        )
        this.getAllCours();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

}
