import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiURL ='http://localhost:3000/user';

  GetAll(){
    return this.http.get(this.apiURL);
  }

  GetByCode(code: any){
    return this.http.get(this.apiURL + '/' + code);
  }

  getUserRole(){
    return this.http.get('http://localhost:3000/role');
  }

  GetUserbyCode(id:any){
    return this.http.get(this.apiURL+'/'+id);
  }

  ProceedRegister(inputData: any){
    return this.http.post(this.apiURL, inputData);
  }

  UpdateUser(code: any, inputData: any){
    return this.http.put(this.apiURL + '/' + code, inputData );
  }

  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

  GetRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }

  GetAllCustomer(){
    return this.http.get('http://localhost:3000/customer');
  }

  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }
}
