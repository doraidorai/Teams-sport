import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userURL: string='http://localhost:3000/api/users';
  constructor(private httpClient:HttpClient) { }
// obj = {firstnam:.....,lastname:....,email:....,pwd:...}
  Signup(Obj, img:File){
    let fData= new FormData();
    fData.append("img",img);
    fData.append("firstName",Obj.firstName);
    fData.append("lastName",Obj.lastName);
    fData.append("email",Obj.email);
    fData.append("pwd",Obj.pwd);
    fData.append("role",Obj.role);
    if (Obj.Tel) {
      fData.append("Tel",Obj.Tel);
    }
    return this.httpClient.post<{msg:String}>(this.userURL +'/signup', fData);
  }
// obj = {email:....,pwd:...}
  login(Obj){
    return this.httpClient.post<{msg:String,connectedUser:any}>(this.userURL+'/login', Obj);
  }
  
}
