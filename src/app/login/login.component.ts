import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { ConnectionService, User } from '../services/connection.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  DBemail:any;
  userdetailsarray: User[] = [];
  public ov:any;
  public emailcheck=0;
  public passwordcheck=0;
  public db= new Array();
  DBpassword:any;
  public LoginError = false;
  public LoadingSpinner = false;
  
  constructor(private router:Router, public connectionService:ConnectionService) { 
   this.DBemail=connectionService.dbemail;
   this.DBpassword=connectionService.dbpassword;
  }

  ngOnInit(): void {
    this.connectionService.API.subscribe(
      response => {
        console.log(response);
        this.userdetailsarray = response;
      }
    );
  }

  move_to_register(){
    this.router.navigateByUrl('/register');
  }
  move_to_forgot_password(){
    this.router.navigateByUrl('/forgot-password');
  
  }
  
  onSubmit(loginForm:NgForm){
    this.LoadingSpinner=true;
    var emailTemp="";
    var passwordTemp="";
    emailTemp=loginForm.controls.email.value;
    passwordTemp=loginForm.controls.password.value;
    for(let user of this.userdetailsarray){
      if(user.email==emailTemp){
        this.emailcheck=1;
        if(user.password==passwordTemp){
          this.passwordcheck=1;
          this.connectionService.setName(user.ename);
        
        }
        
      } 
    
      
    }

    if(this.emailcheck>0&&this.passwordcheck>0){
     
      this.router.navigateByUrl('/dashboard');
    }
    else{
           
         this.LoginError=true;
         this.LoadingSpinner=false;
         
       }
  
     

    
  }

}
