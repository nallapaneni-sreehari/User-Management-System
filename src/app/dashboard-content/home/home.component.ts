import { Component, OnInit } from '@angular/core';
import { ConnectionService, User } from 'src/app/services/connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userdetailsarray: User[] = [];
  constructor(public connectionService:ConnectionService) {

   }

  ngOnInit(): void {
    this.connectionService.API.subscribe(
      response => {
        console.log(response);
        this.userdetailsarray = response;
      }
    );
  }

}
