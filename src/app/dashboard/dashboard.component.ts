import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService, User } from '../services/connection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public Name: any;
  public HomeContent = false;
  public EditProfileContent = false;
  public FeedbackContent = false;
  public MessagesContent = false;
  userdetailsarray: User[] = [];

  constructor(private router:Router,public connectionService:ConnectionService) { 
    this.Name=this.connectionService.Ename;
  }
  

  ngOnInit(): void {
    this.HomeContent = true;
    this.EditProfileContent = false;
    this.FeedbackContent = false;
    this.MessagesContent = false;
    this.Name=this.connectionService.Ename;
    
  }

  edit(){
    this.HomeContent = false;
    this.EditProfileContent = true;
    this.FeedbackContent = false;
    this.MessagesContent = false;
  
  }
  feedback(){
    this.HomeContent = false;
    this.EditProfileContent = false;
    this.FeedbackContent = true;
    this.MessagesContent = false;
   
  }
  messages(){
    this.HomeContent = false;
    this.EditProfileContent = false;
    this.FeedbackContent = false;
    this.MessagesContent = true;
 
  }
  home(){
    this.HomeContent = true;
    this.EditProfileContent = false;
    this.FeedbackContent = false;
    this.MessagesContent = false;
   
  }

  logout(){
    this.router.navigateByUrl('/login');
  }

}
