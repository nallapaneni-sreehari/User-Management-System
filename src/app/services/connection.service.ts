import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable()
export class ConnectionService {
  
  dbemail="";
  dbpassword="";
  public Ename="";
  
  constructor(private http:HttpClient) { 

  }
  public API_URL = 'http://localhost:20788/api/employees/';
  
  public API=this.http.get<any>(this.API_URL);
  

setName(name: string){
  this.Ename=name;
}

onRegister(params: any):Observable<any>{
  // let data={status:'success'};
  // return of(data);
  return this.http.post(this.API_URL+'register',params);
}

onSendMessage(params:any):Observable<any>{
  console.log("Message params", params);
  let obj = {
    "msgFrom": params.msgFrom,
    "msgTo": params.msgTo,
    "msgText": params.msgText,
    "msgDate": params.msgDate,
    "msgStatus": "sent"
  }
  return this.http.post('http://localhost:5793/api/messages',obj);
}
getAllMessages(params:any):Observable<any>{
  let name = "sreehari";
  return this.http.get(`http://localhost:5793/api/messages?name=${name}`);
}

}

export class User {
  constructor(
    public id: any,
    public ename: any,
    public job: any,
    public salary: any,
    public username: any,
    public email: any,
    public password: any,
    public phone: any,
    public status: any,
    public message: any,
    public notification: any
 
  ) {}
}



