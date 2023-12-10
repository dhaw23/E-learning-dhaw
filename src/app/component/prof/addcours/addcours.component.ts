import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import { CoursService } from 'src/app/service/cours.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcours',
  templateUrl: './addcours.component.html',
  styleUrls: ['./addcours.component.css']
})
export class AddcoursComponent implements OnInit{
  formCours:FormGroup
  fileToUpload: Array<File> = [];
  categorie:any;
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private coursService: CoursService,private categorieService:CategoriesService,private formBuilder:FormBuilder,private router:Router) {}
  //code abou 
  ngOnInit(): void {
    this.getAllCategories();
    this.formCours=this.formBuilder.group({
      title:['',Validators.required],
      course_description:['',Validators.required],
      image:['',Validators.required],
      id_category:['',Validators.required],

    })
  }
  get f() { return this.formCours.controls; }

  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }
  getAllCategories(){
    this.categorieService.getAllcategorie().subscribe(
      (res:any)=>{
        console.log("categorie : ",res)
        this.categorie = res;
      }
    )

  }
  onSubmit() {
    if (this.formCours.invalid) {
      return;
    }
    else{
    let formData = new FormData();
    formData.append("title", this.formCours.value.title);
    formData.append("course_description", this.formCours.value.course_description);
    formData.append("imageFile", this.fileToUpload[0]);       
    this.coursService.AddCours(this.userconnect.userId, this.formCours.value.id_category,formData).subscribe(
      (res: any) => {
        console.log("Cours added ! ", res)
        Swal.fire(
          'add new Cours',
          'success'
        )
      }
    )
   }

  }

}
