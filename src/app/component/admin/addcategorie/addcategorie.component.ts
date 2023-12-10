import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.css']
})
export class AddcategorieComponent implements OnInit{
  formCategorie:FormGroup
  constructor(private categorieService: CategoriesService,private formBuilder:FormBuilder,private router:Router) {}
  //code abou 
  ngOnInit(): void {
    this.formCategorie=this.formBuilder.group({
      label:['',Validators.required]
    })
  }
  get f(){return this.formCategorie.controls}
  onSubmit(){
    if(this.formCategorie.invalid){
      return
    }else{
      this.categorieService.AddCategorie(this.formCategorie.value).subscribe(
        (res)=>{
          console.log("Add categorie",res)
        }
      )
      Swal.fire({
        title: "Success Add Categorie",
        text: "Add Categorie",
        icon: "success"
      });
    }
  }
}
