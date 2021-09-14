import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  move_to_login(){
    this.router.navigateByUrl('/login');
   
  }
 
  move_to_forgot_password(){
    this.router.navigateByUrl('/forgot-password');
  
  }
  
  onSubmit(signupForm:NgForm){
    var name="";
    var email="";
    var password="";
    var phone="";
    name=signupForm.controls.name.value;
    email=signupForm.controls.email.value;
    password=signupForm.controls.password.value;
    phone=signupForm.controls.phone.value;
    
    alert(signupForm.value);
  }

}
