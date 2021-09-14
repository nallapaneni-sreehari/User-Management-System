import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ConnectionService {
  
  dbemail="";
  dbpassword="";
  public Ename="";
  
  constructor(private http:HttpClient) { 

  }

  
    public API=this.http.get<any>('http://localhost:20788/api/employees')
  

setName(name: string){
  this.Ename=name;
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



