import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  public selectedInd: any;
  public sendMsg:any={
    to:"",
    msg:"",
    errors:""
  };
  public panelOpenState:boolean=true;
  columnsToDisplay = ['Message', 'From', 'Date', 'Status'];
  expandedElement:any;
  public allMessages:any=[];
  public messages:any = [{msg:"Hi this is sattar, ief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney C",
   from:"Sattar", date:"10-09-2021 12:24 PM", status:"unread", toggle:false, type:"rec"},

  {msg:"Hi this is Clinton, The standard chunk of Lorem", from:"Clinton", date:"10-09-2021 2:31 PM", status:"read", toggle:false, type:"rec"},
  {msg:"Hi this is Pavan, The standard chunk of Lorem Ipsum used since the 1500s is reproduced below", from:"Pavan", date:"10-09-2021 1:24 PM", status:"read", toggle:false, type:"rec"},
  {msg:"Hi this is Basva, The standard chunk of Lorem The standard chunk ", from:"Surendra", date:"10-09-2021 3:02 PM", status:"unread", toggle:false, type:"rec"},
  {msg:"Hi this is Paramasiva,  standard The standard chunk of Lorem Thechunk ", from:"Param", date:"10-09-2021 4:02 PM", status:"unread", toggle:false, type:"rec"},
  {msg:"Hi this is Soumyajit, The standardandard chunk  chunk of Lorem The st", from:"Soumyajit", date:"10-09-2021 5:02 PM", status:"unread", toggle:false, type:"rec"},

  {msg:"Hi this is Soumyajit, The standardandard chunk  chunk of Lorem The st", from:"Sattar", date:"10-09-2021 12:29 PM", status:"unread", toggle:false, type:"rec"},
  {msg:"Hi this is Soumyajit, The standardandard chunk  chunk of Lorem The st", from:"Pavan", date:"10-09-2021 1:28 PM", status:"unread", toggle:false, type:"rec"}

  ]

  public sentMessage:any=[
    {msg:"Hi bro, How are you doing ure from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney C ?"
    ,to:"Sattar", date:"10-09-2021 12:25 PM", status:"sent", type:"sent"},

    {msg:"Hello bro, Status of project ?",to:"Clinton", date:"10-09-2021 2:32 PM", status:"sent", type:"sent"},

    {msg:"Hello bro, Status of project ?",to:"Sattar", date:"10-09-2021 12:33 PM", status:"sent", type:"sent"},
    {msg:"Hello bro, Status of project ?",to:"Pavan", date:"10-09-2021 1:32 PM", status:"sent", type:"sent"},

    {msg:"Hi bro, How to apply OD ?",to:"Surendra", date:"10-09-2021 3:03 PM", status:"sent", type:"sent"},
    {msg:"Hi bro, Are your leaves accepted ?",to:"Param", date:"10-09-2021 4:04 PM", status:"sent", type:"sent"},
    {msg:"Hi bro, What are you learning bro ?",to:"Pavan", date:"10-09-2021 1:25 PM", status:"sent", type:"sent"},
    {msg:"Hi bro, Is it ok if we discuss it in meeting ?",to:"Soumyajit", date:"10-09-2021 12:25 PM", status:"sent", type:"sent"},
  ];

  public selectedChat:any=[];
  
  
  ngOnInit(): void {
    // this.selectedChat.push(this.messages[0]);
    // this.selectedChat.push(this.sentMessage[0]);

  //   this.allMessages.push(this.messages);
  //   this.allMessages.push(this.sentMessage);
  //   this.allMessages = this.allMessages.sort((a:any, b:any) => {
  //     return +new Date(a.date) - +new Date(b.date);
  // });

    console.log("Alllll::",this.selectedChat);

  }
  onToggle(m:any){
    console.log("Message:::",m);
    m.toggle=!m.toggle;
    m.status='read';
  }

  onChatSelect(chat:any,i:any){
    this.selectedInd=i;
    this.selectedChat=[];
    this.sendMsg.to = chat.from;
    chat.date = Number(new Date(chat.date))/1;
    // this.selectedChat.push(chat);
    for(let m of this.sentMessage){
      if(m.to == chat.from){
        m.date = Number(new Date(m.date))/1;
        this.selectedChat.push(m);
      }
    }
    for(let m of this.messages){
      if(m.from == chat.from){
        m.date = Number(new Date(m.date))/1;
        this.selectedChat.push(m);
      }
    }
    console.log("Selected Chat:::", this.selectedChat);
  }

  onSendMessage(){
    if(!this.sendMsg.msg || this.sendMsg.msg==' '){
      this.sendMsg.errors=true;
    }
    else{
      let newMsg = {
        msg:this.sendMsg.msg,
        to:this.sendMsg.to,
        date:new Date(),
        status:'sent',
        type:'sent',
      };
      this.selectedChat.push(newMsg);
      this.sentMessage.push(newMsg);
      this.sendMsg.errors=false;
    }
    console.log("Sent:::::::::::",this.sentMessage);


    console.log("Sending message to..",this.sendMsg);
    this.sendMsg=[];
  }
  
}
