import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit{
  formUser: FormGroup
  constructor(private authService: AuthenticationService,private formBuilder:FormBuilder,private router:Router) {}
  //code abou 
  ngOnInit(): void {
    this.formUser=this.formBuilder.group({
      username:['',Validators.required],
      email:['',Validators.email],
      password:['',Validators.required],
    })
  }

  get f(){return this.formUser.controls}

  onSubmit(){
    if (this.formUser.invalid){
      return;
    }else{
      this.authService.registerTeacher(this.formUser.value).subscribe(
        (res:any) => {
          console.log(res);
        }
      )
      Swal.fire({
        title: "Success Redister",
        text: "Register Tacher",
        icon: "success"
      });
    }
  }

}
