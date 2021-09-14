import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  public panelOpenState:boolean=true;
  public selectedChat:any=[];
  columnsToDisplay = ['Message', 'From', 'Date', 'Status'];
  expandedElement:any;
  public messages = [{msg:"Hi this is sattar, ief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney C", from:"sattar", date:"10-09-2021 12:24 PM", status:"unread", toggle:false},
  {msg:"Hi this is Pavan, The standard chunk of Lorem Ipsum used since the 1500s is reproduced below", from:"Pavan", date:"10-09-2021 1:24 PM", status:"read", toggle:false},
  {msg:"Hi this is Clinton, The standard chunk of Lorem", from:"Clinton", date:"10-09-2021 2:31 PM", status:"read", toggle:false},
  {msg:"Hi this is Basva, The standard chunk of Lorem The standard chunk ", from:"Surendra", date:"10-09-2021 3:02 PM", status:"unread", toggle:false},
  {msg:"Hi this is Paramasiva,  standard The standard chunk of Lorem Thechunk ", from:"Param", date:"10-09-2021 4:02 PM", status:"unread", toggle:false},
  {msg:"Hi this is Soumyajit, The standardandard chunk  chunk of Lorem The st", from:"Soumyajit", date:"10-09-2021 5:02 PM", status:"unread", toggle:false}

  ]


  ngOnInit(): void {
  }
  onToggle(m:any){
    console.log("Message:::",m);
    m.toggle=!m.toggle;
    m.status='read';
  }

  onChatSelect(chat:any){
    this.selectedChat = chat;
    console.log("Selected Chat:::", this.selectedChat);
  }
}
