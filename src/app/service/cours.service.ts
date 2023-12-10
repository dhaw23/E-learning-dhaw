import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http:HttpClient) { }
  AddCours(id_user:any,id_categorie:any,cours:any){
    return this.http.post(`http://localhost:8080/course/addcourse/${id_user}/${id_categorie}`,cours)
  }
  getAllCours(){
    return this.http.get(`http://localhost:8080/course/getAllCours`)
  }
  getOneCours(idcour : any){
    return this.http.get(`http://localhost:8080/course/getOneCours/${idcour}`)
  }
  getAllcoursOfTeacher(id:any){
    return this.http.get(`http://localhost:8080/course/getAllcourseOfTeacher/${id}`)
  }
  deleteOneCours(id:any){
    return this.http.delete(`http://localhost:8080/course/deletecours/${id}`)
  }
}
