import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }
  registerUser(user:any){
    return this.http.post(`http://localhost:8080/auth/register`,user)
  }
  loginUser(user:any){
    return this.http.post(`http://localhost:8080/auth/login`,user)
  }
  registerTeacher(user:any){
    return this.http.post(`http://localhost:8080/admin/addteacher`,user)
  }
}
