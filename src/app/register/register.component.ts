import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../services/connection.service';
import { GlobaldataService } from '../services/globaldata.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private service: ConnectionService, private countries: GlobaldataService) { }
  public country = new FormControl;
  public cont = new FormControl;
  public lang = new FormControl;

  public countriesList:any=[];
  public languagesList:any=[];

  public continents=this.countries.counList;

  public userData:any={
    continent:"",
    country:"",
    language:""
  };

  public status=false;
  public ErrorStatus=false;
  public LoadingSpinner=false;
  public StatusMessage:any;

  ngOnInit(): void {
  }

  move_to_login() {
    this.router.navigateByUrl('/login');

  }

  onCountrySelected(event:any){
    console.log("Event:::", event);
  }

  move_to_forgot_password() {
    this.router.navigateByUrl('/forgot-password');

  }

  onSubmit(signupForm: NgForm) {
    this.LoadingSpinner=true;
    var username="";
    // var name = "";
    var email = "";
    var password = "";
    var address="";
    var phone = "";
    var country = "";
    var continent = "";
    var language = "";

    username=signupForm.controls.username.value;
    // name = signupForm.controls.name.value;
    email = signupForm.controls.email.value;
    password = signupForm.controls.password.value;
    address=signupForm.controls.address.value;
    phone = signupForm.controls.phone.value;
    continent = this.userData.continent;
    country = this.userData.country;
    language = this.userData.lan;


    let userDetails = {
      username:username,
      // name: name,
      email: email,
      password: password,
      address:address,
      phone: phone,
      continent:continent,
      country:country,
      language:language
    }
    // alert(signupForm.value);
    console.log("Form:::", userDetails)
    this.service
      .register(username, email, password, continent, country, language, address, phone)
      .pipe(first())
      .subscribe({
        next: data => {
        console.log(data);
          this.status=true;
          this.LoadingSpinner=false;
          this.StatusMessage="";
        },
        error: error => {
          this.status=false;
          this.ErrorStatus=true;
          this.StatusMessage=error.error.massage;
          this.LoadingSpinner=false;
        }
    });
    // this.service.onRegister(userDetails).subscribe(data => {
    //   if (data.status == 'success') {
    //     console.log("User Successfully created!");
    //     this.router.navigate(['/login']);
    //   }
    //   else {
    //     console.log("Error while creating User!");
    //   }

    // })
  }

  onContinentChange(){
    // console.log("countriesList::", this.countriesList)
    this.countriesList=[];
    if(this.userData.continent){
      for(let c of this.countries.continents){
        if(this.userData.continent == c.continent){
          this.countriesList.push(c);
        }
      }
    }
    else{
      this.userData.errors="Please select Continent First.";
    }
    // console.log("countriesList::", this.countriesList)
  }

  onCountryChange(){
    // console.log("onCountryChange", this.languagesList)
    this.languagesList=[];
    if(this.userData.country){
      for(let c of this.countries.continents){
        if(this.userData.country == c.country){
          if(c.lan){
            for(let l of c.lan){
              this.languagesList.push(l);
            }
          }
        }
      }
    }
    else{
      this.userData.errors="Please select Country First.";
    }
    // console.log("languagesList::", this.languagesList)
  }
}
