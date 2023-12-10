import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formUser:FormGroup;
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private userService: AuthenticationService,private router:Router,private formBuilder:FormBuilder) {}
  ngOnInit(): void {
    this.formUser=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }
  get f(){return this.formUser.controls}
  login() {
    if (this.formUser.invalid) {
      return;
    }
    else {
    this.userService.loginUser(this.formUser.value).subscribe(
        (res:any)=>{
          console.log("this is user :",res)
          console.log(res)
          if (res.user.usertype === "ADMIN") {
            Swal.fire({
              icon: 'success',
              title: 'Welcome ',
            })
            this.router.navigateByUrl('/homeadmin')
            localStorage.setItem('userconnect', JSON.stringify(res.user))
            localStorage.setItem('token', res.token)
            localStorage.setItem("state", "0")
          }else if(res.user.usertype === "STUDENT"){
            Swal.fire({
              icon: 'success',
              title: 'Welcome ',
            })
            this.router.navigateByUrl('/homeuser')
            localStorage.setItem('userconnect', JSON.stringify(res.user))
            localStorage.setItem('token', res.token)
            localStorage.setItem("state", "0")
          }else if (res.user.usertype === "TEACHER"){
            Swal.fire({
              icon: 'success',
              title: 'Welcome ',
            })
            this.router.navigateByUrl('/hometeacher')
            localStorage.setItem('userconnect', JSON.stringify(res.user))
            localStorage.setItem('token', res.token)
            localStorage.setItem("state", "0")
            
          }
        }
      )
    }
  }
}
