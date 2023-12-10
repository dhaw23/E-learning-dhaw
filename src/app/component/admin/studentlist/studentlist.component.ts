import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit{
  users:any;
  p: number = 1;
  constructor(private userService: UserService,private router:Router,private formBuilder:FormBuilder) {}
  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser(){
    this.userService.getAllStudent().subscribe(
      (res)=>{
         this.users=res;
         console.log("user : ",res)
      }
    )
  }
}
