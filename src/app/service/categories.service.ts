import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http : HttpClient) { }
  AddCategorie(categorie:any){
    return this.http.post(`http://localhost:8080/category/addcategory`,categorie)
  }
  getAllcategorie(){
    return this.http.get(`http://localhost:8080/category/getallcategories`)
  }
  deleteOne(id_categorie:any){
    return this.http.delete(`http://localhost:8080/category/deletecategory/${id_categorie}`)
  }
  updateOne(id:any,categorie:any){
    return this.http.put(`http://localhost:8080/category/updatecategory/${id}`,categorie)
  }
  getOneCategorie(id:any){
    return this.http.get(`http://localhost:8080/category/updatecategory/${id}`)
  }
}
