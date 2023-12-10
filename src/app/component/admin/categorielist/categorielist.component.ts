import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorielist',
  templateUrl: './categorielist.component.html',
  styleUrls: ['./categorielist.component.css']
})
export class CategorielistComponent implements OnInit{
  categories:any;
  p: number = 1;
  constructor(private categorieService: CategoriesService,private router:Router,private formBuilder:FormBuilder) {}
  ngOnInit(): void {
    this.getAllCategories();
  }


  getAllCategories(){
    this.categorieService.getAllcategorie().subscribe(
      (res)=>{
         this.categories=res;
         console.log("user : ",res)
      }
    )
  }
  deleteCategorie(id:any){
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
        this.categorieService.deleteOne(id).subscribe(
          (res)=>{
            console.log("categorie deleted",res);
            this.getAllCategories();
          }
        )
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
}
