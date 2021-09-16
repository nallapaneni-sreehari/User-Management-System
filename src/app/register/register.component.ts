import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../services/connection.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private service: ConnectionService) { }

  ngOnInit(): void {
  }

  move_to_login() {
    this.router.navigateByUrl('/login');

  }

  move_to_forgot_password() {
    this.router.navigateByUrl('/forgot-password');

  }

  onSubmit(signupForm: NgForm) {
    var name = "";
    var email = "";
    var password = "";
    var phone = "";
    name = signupForm.controls.name.value;
    email = signupForm.controls.email.value;
    password = signupForm.controls.password.value;
    phone = signupForm.controls.phone.value;
    let userDetails = {
      name: name,
      email: email,
      password: password,
      phone: phone
    }
    // alert(signupForm.value);
    console.log("Form:::", userDetails)
    this.service.onRegister(userDetails).subscribe(data => {
      if (data.status == 'success') {
        console.log("User Successfully created!");
        this.router.navigate(['/login']);
      }
      else {
        console.log("Error while creating User!");
      }

    })
  }

}
