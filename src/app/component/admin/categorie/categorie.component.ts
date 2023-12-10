import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{
  constructor(private router:Router) {}
  ngOnInit(): void {
    this.navigate();
  }
  navigate(){
    this.router.navigateByUrl('/homeadmin/categories/addcategorie')
  }
  
}
