import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService} from '../services/connection.service';
import { Notification } from '../models/notification';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public Name: any;
  public count=0;
  public HomeContent = false;
  public EditProfileContent = false;
  public FeedbackContent = false;
  public MessagesContent = false;
  public NotificationClicked=false;
  public NotificationStatus=false;
 
  
  
  constructor(private router:Router,public connectionService:ConnectionService) { 
  }
  public notification:Notification[] | any;

  ngOnInit(): void {
    this.HomeContent = true;
    this.EditProfileContent = false;
    this.FeedbackContent = false;
    this.MessagesContent = false;
    this.NotificationClicked=false;
    this.Name = localStorage.getItem('CurrentUser');
    if(this.Name==null){
      this.connectionService.logout();
    }
   this.connectionService.getNotification().subscribe(data=>{this.notification=data;})
    
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
    this.connectionService.logout();
    
  }
  ClearAllNotification(){
  
       this.connectionService.ClearNotification(1)
       .pipe(first())
       .subscribe({
        next: data => {
            this.NotificationStatus =true;
            console.log("Deleted")
            console.log(data);
        },
        error: error => {
          this.NotificationStatus =false;
          console.log(error);
          console.log("Not Deleted")
        }
    });
  }

  MarkAllAsRead(){
    alert("Marked all as read")
  }
  call(){
    this.NotificationClicked=true;
    this.count++;

    
  }
  
  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    if((this.NotificationClicked==true)&&(this.count==0)){
      this.NotificationClicked=false;

    }
    else{
      if(this.NotificationClicked!=false){
      this.NotificationClicked=true;
      this.count--;
      }
    }
  }
}
