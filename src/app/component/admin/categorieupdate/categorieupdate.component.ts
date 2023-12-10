import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorieupdate',
  templateUrl: './categorieupdate.component.html',
  styleUrls: ['./categorieupdate.component.css']
})
export class CategorieupdateComponent implements OnInit{
  formCategorie:FormGroup
  id = this.activateRoot.snapshot.params['id']
  constructor(private categorieService: CategoriesService,private formBuilder:FormBuilder,private router:Router,private activateRoot:ActivatedRoute) {}
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
      this.categorieService.updateOne(this.id,this.formCategorie.value).subscribe(
        (res)=>{
          console.log("Update categorie",res)
        }
      )
      Swal.fire({
        title: "Success Update Categorie",
        text: "Update Categorie",
        icon: "success"
      });
    }
  }

}
