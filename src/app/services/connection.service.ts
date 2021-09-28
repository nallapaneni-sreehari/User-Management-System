import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable()
export class ConnectionService {
  
  dbemail="";
  dbpassword="";
  public Ename="";
  
  constructor(private http:HttpClient, private router:Router) { 

  }
  public API_URL = 'http://104.251.211.189/api/';
  
  public API=this.http.get<any>(environment.baseUrl);
  // public Ename="";
  public Ratings:any;
  public Comments:any;
  public CurrentUser:any;
  public CurrentUserToken:any;
  public header=new HttpHeaders();

setName(name: string){
  this.Ename=name;
}

login(username: string, password: string) {
  return this.http
    .post<any>(environment.baseUrl+"Authentication/Login", { username, password })
    .pipe(
      map((user) => {
        this.CurrentUser=JSON.stringify(user.user);
        this.CurrentUserToken=JSON.stringify(user.token);
        this.CurrentUser=this.CurrentUser.replace(/['"]+/g, '');
        this.CurrentUserToken=this.CurrentUserToken.replace(/['"]+/g, '');
        localStorage.setItem('CurrentUser', this.CurrentUser);
        localStorage.setItem('CurrentUserToken', this.CurrentUserToken);
     
       return user;
      })
    );
} 

// register(username: string, email: string, password: string, continent: string, country: string, langauge: string, adress: string, phonenumber: string) {
register(username: string, email: string, password: string, continent: string, country: string, Langauge: string, Adress: string, PhoneNumber: string) {
  return this.http
    // .post<any>(environment.baseUrl+"Authentication/Register", { username, email, password, continent, country, langauge, adress, phonenumber })
    .post<any>(environment.baseUrl+"Authentication/Register", { username, email, password, continent, country, Langauge, Adress, PhoneNumber })
    .pipe(
      map((user) => {
    
     
       return user;
      })
    );
}

ClearNotification(id:number){
  if(localStorage.getItem('CurrentUserToken')){
    this.header.append('Authorization','Bearer'+localStorage.getItem('CurrentUserToken'));
  }
     return  this.http.delete(environment.baseUrl+"Notifications/"+id, { headers:this.header })
  .pipe(
    map((user) => {
     return user;
    })
  );

}



logout() {
  localStorage.removeItem('CurrentUser'); 
  localStorage.removeItem('CurrentUserToken');
  this.router.navigateByUrl('/login');
}
getNotification(): Observable<Notification[]> {
  if(localStorage.getItem('CurrentUserToken')){
    this.header.append('Authorization','Bearer'+localStorage.getItem('CurrentUserToken'));
  }
  return this.http.get<any>(environment.baseUrl+"Notifications",{headers:this.header})
  .pipe(
    map((user) => { 
     return user;
    })
  );
}

// onRegister(params: any):Observable<any>{
//   // let data={status:'success'};
//   // return of(data);
//   return this.http.post(environment.baseUrl+'register',params);
// }

onSendMessage(params:any):Observable<any>{
  let obj = {
    "msgFrom": params.msgFrom,
    "msgTo": params.msgTo,
    "msgText": params.msgText,
    "time": params.msgDate,
  }
  console.log("Message params", obj);

  return this.http.post(environment.baseUrl+'Message',obj);
}
getAllMessages(params:any):Observable<any>{
  // let email = "sreehari";
  let username = params.username;
  console.log("Getting",username," Messages");
  return this.http.get(environment.baseUrl+'Message/'+username);
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

  return this.http.put(environment.baseUrl+'Message/'+obj.msgId,obj);
}

deleteMessage(params:any){
  let msgId = params.msgId;
  console.log("Deleting msgId::",msgId);
  return this.http.delete(environment.baseUrl+'Message/'+msgId);
}

checkEmail(email:any){
  console.log("Email::::",email)
  let params=
  {
    "Email":email
  }
  // return this.http.post(environment.baseUrl+'Authentication/EmailCheck',params);
  return this.http.post(environment.baseUrl+'Authentication/EmailCheck',params);
  
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



