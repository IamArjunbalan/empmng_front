import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  base_Url="http://localhost:3000"

  constructor(private http:HttpClient) { }

  getAdminDetails(){
    return this.http.get(`${this.base_Url}/employees/1`)
  }
  addEmploymentDetails(data:any){
    return this.http.post(`${this.base_Url}/employees`,data)
  }

  getEmployees(){
    return this.http.get(`${this.base_Url}/employees`)
  }

  getSpecificEmployee(id:any){
    return this.http.get(`${this.base_Url}/employees/${id}`)
  }
  updateEmployee(data:any,id:any){
    return this.http.put(`${this.base_Url}/employees/${id}`,data)
  }

  deleteEmployee(id:any){
    return this.http.delete(`${this.base_Url}/employees/${id}`)


  }
  getAdmin(){
    return this.http.get(`${this.base_Url}/employees/1`)
  }
  
  updateAdmin(data:any){
    return this.http.put(`${this.base_Url}/employees/1`,data)

  }
  isLoggedIn(){
    return !!sessionStorage.getItem("adminUser")
  }
}

