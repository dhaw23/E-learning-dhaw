import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import { CoursService } from 'src/app/service/cours.service';

@Component({
  selector: 'app-coursstudent',
  templateUrl: './coursstudent.component.html',
  styleUrls: ['./coursstudent.component.css']
})
export class CoursstudentComponent implements OnInit{
  cours:any;
  categories:any;

  constructor( private categorieServise:CategoriesService,private coursService:CoursService, private route: Router) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllCours();
  }

  getAllCours(){
    this.coursService.getAllCours().subscribe(
      (res:any)=>{
        this.cours=res;
        console.log("categories",res)
      }
    )
  }

  getAllCategories(){
    this.categorieServise.getAllcategorie().subscribe(
      (res:any)=>{
        this.categories=res;
        console.log("categories",res)
      }
    )
  }
  OnChangeCategory(category: any) {
    console.log("detected value category ", category.id)
    this.coursService.getAllCours().subscribe(
      (res: any) => {
        console.log(res)
        this.cours = res.filter((res: any) => res.category.id == category.id)
        console.log("list of voitures", this.cours)
      })
  }

}
