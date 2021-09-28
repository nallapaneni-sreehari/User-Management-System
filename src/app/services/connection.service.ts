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
  public API_URL = 'http://104.251.211.189/api/';
  
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
  let obj = {
    "msgFrom": params.msgFrom,
    "msgTo": params.msgTo,
    "msgText": params.msgText,
    "time": params.msgDate,
  }
  console.log("Message params", obj);

  return this.http.post(this.API_URL+'Message',obj);
}
getAllMessages(params:any):Observable<any>{
  let email = "sreehari";
  // let email = params.email;
  return this.http.get(this.API_URL+'Message/'+email);
}
editMessage(params:any){
  // let msgId = params.msgId;
  let obj = {
    "msgId": params.msgId,
    "msgFrom": params.msgFrom,
    "msgTo": params.msgTo,
    "msgText": params.msgText,
    "time": params.time,
  }
  console.log("Edit Msg params", obj);

  return this.http.put(this.API_URL+'Message/'+obj.msgId,obj);
}

deleteMessage(params:any){
  let msgId = params.msgId;
  console.log("Deleting msgId::",msgId);
  return this.http.delete(this.API_URL+'Message/'+msgId);
}

checkEmail(email:any){
  console.log("Email::::",email)
  let params=
  {
    "Email":email
  }
  // return this.http.post(this.API_URL+'Authentication/EmailCheck',params);
  return this.http.post(this.API_URL+'Authentication/EmailCheck',params);
  
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



