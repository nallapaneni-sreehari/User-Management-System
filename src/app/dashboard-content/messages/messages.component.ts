import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private service:ConnectionService) { }

  public selectedInd: any;
  public writeMsg:any=false;
  public sendMsg:any={
    to:"",
    msg:"",
    errors:""
  };
  public panelOpenState:boolean=true;
  // columnsToDisplay = ['Message', 'From', 'Date', 'Status'];
  expandedElement:any;
  // public allMessages:any=[];

  public allMessages:any = [
    // clear us when working with API
    {msgFrom:"Sattar", msgTo:"sreehari", msgText:"Hi how are you ? It's Sattar", msgDate:"09-15-2021 12:30 PM", type:"rec", status:"unread" },
    {msgFrom:"Pavan",msgTo:"sreehari", msgText:"Hi bro Iam Pavan !", msgDate:"09-15-2021 2:30 PM", type:"rec", status:"read" },
    {msgFrom:"Clinton", msgTo:"sreehari",msgText:"Clinton Here ?", msgDate:"09-15-2021 1:30 PM", type:"rec", status:"unread" },
    {msgFrom:"Param",msgTo:"sreehari", msgText:"Paramsivam is waiting for bus ?", msgDate:"09-15-2021 1:30 PM", type:"rec", status:"unread" },
    {msgFrom:"Surendra",msgTo:"sreehari", msgText:"Surendra went to market ?", msgDate:"09-15-2021 1:30 PM", type:"rec", status:"read" },
    {msgFrom:"Soumyajit",msgTo:"sreehari", msgText:"Soumyajit is Online ?", msgDate:"09-15-2021 1:30 PM", type:"rec", status:"read" },



    {msgTo:"Sattar", msgFrom:"sreehari", msgText:"Hi Sattar, how are you ?", msgDate:"09-15-2021 12:40 PM", type:"sent", status:"sent" },
    {msgTo:"Pavan",msgFrom:"sreehari", msgText:"Hi Pavan !", msgDate:"09-15-2021 2:34 PM", type:"sent", status:"sent" },
    {msgTo:"Clinton", msgFrom:"sreehari",msgText:"Hi Clinton ?", msgDate:"09-15-2021 1:31 PM", type:"sent", status:"sent" },
    {msgTo:"Param",msgFrom:"sreehari", msgText:"Paramsivam Hi", msgDate:"09-15-2021 1:32 PM", type:"sent", status:"sent" },
    {msgTo:"Surendra",msgFrom:"sreehari", msgText:"Surendra Hello", msgDate:"09-15-2021 1:37 PM", type:"sent", status:"sent" },
    {msgTo:"Soumyajit",msgFrom:"sreehari", msgText:"Soumyajit Hii", msgDate:"09-15-2021 1:34 PM", type:"sent", status:"sent" },

]

  public messages:any = []

  public sentMessage:any=[];

  public RecMessages:any=[];

  public selectedChat:any=[];
  
  
  ngOnInit(): void {
    this.prepareChats();
    this.getAllMessages(); //remove me when working with API

    // this.allMessages = this.messages.map((item:any, i:any) => Object.assign({}, item, this.sentMessage[i]));
    // console.log("Names:::::",this.allMessages);


    // for(let m of this.messages){
    //   if(JSON.stringify(this.allMessages).includes(m.name)){
    //     this.messages.pop(m);
    //   }
    // }

    // console.log("Alllll::",this.messages);


  }
  onToggle(m:any){
    console.log("Message:::",m);
    m.toggle=!m.toggle;
    m.status='read';
  }

  onChatSelect(chat:any,i:any){
    console.log("Chat Selected:::",chat);
    this.writeMsg = false;
    this.selectedInd=i;
    this.selectedChat=[];
    this.sendMsg.to = chat.name;
    chat.msgDate = Number(new Date(chat.msgDate))/1;
    // this.selectedChat.push(chat);
    for(let m of this.allMessages){
      if(m.msgTo == chat.name){
        m.msgDate = Number(new Date(m.msgDate))/1;
        this.selectedChat.push(m);
      }
    }
    for(let m of this.allMessages){
      if(m.msgFrom == chat.name){
        m.msgDate = Number(new Date(m.msgDate))/1;
        this.selectedChat.push(m);
      }
    }

    this.selectedChat.sort((a:any, b:any) => Number(a.msgDate) - Number(b.msgDate));

    console.log("Selected Chat:::", this.selectedChat);
  }

  onSendMessage(){
    if(!this.sendMsg.msg || this.sendMsg.msg==' '){
      this.sendMsg.errors=true;
    }
    else{
      var newMsg = {
        // from:this.service.Ename,
        msgFrom:"sreehari",
        msgTo:this.sendMsg.to,
        msgText:this.sendMsg.msg,
        msgDate:new Date(),
        msgStatus:'sent',
        // type:'sent',
      };
      //Service
      this.service.onSendMessage(newMsg).subscribe(data =>{
        if(data.success){
          console.log("Message sent successfully!");
        }
      });

      this.selectedChat.push(newMsg);
      // this.sentMessage.push(newMsg);
      // this.messages.push(newMsg);
      this.allMessages.push(newMsg);
      this.prepareChats();
      this.selectedChat.sort((a:any, b:any) => Number(a.msgDate) - Number(b.msgDate));

      this.sendMsg.errors=false;
    }
    console.log("Sent:::::::::::",this.selectedChat);


    console.log("Sending message to..",this.sendMsg);
    this.sendMsg.msg="";

    // let obj = this.messages.indexOf(this.messages.find((o:any) => o.name === newMsg.msgTo));
    // console.log("Len::::::", obj);
    this.writeMsg = false;
    this.selectedInd = this.messages.indexOf(this.messages.find((o:any) => o.name === newMsg.msgTo));
  }

  getAllMessages(){
    let params = {
      username:this.service.Ename
    }
    this.service.getAllMessages(params).subscribe(data =>{
      this.allMessages = data;
      console.log("allMessages",data, this.allMessages);
      // for(let m of this.allMessages){
      //   if(m.msgFrom != "sreehari"){
      //     m.name = m.msgFrom;
      //     this.messages.push(m);
      //   }
      //   else if(m.msgFrom == "sreehari" && m.msgTo){
      //     m.name = m.msgTo;
      //     this.messages.push(m);
      //   }
      // }

      //Dividing Messages based on sent and received by User
      this.prepareChats();

    });

  }

  prepareChats(){
    for(let m of this.allMessages){
      if(m.msgFrom === 'sreehari'){
        m.name = m.msgTo;
        this.messages.push(m);
      }
      else if(m.msgTo === 'sreehari'){
        m.name = m.msgFrom;
        this.messages.push(m);
      }
    }
    console.log("Before::",this.messages);

    this.messages = [...new Map(this.messages.map((item:any) =>
      [item['name'], item])).values()];

    console.log("After::",this.messages);

    console.log("Sent By Sree::",this.sentMessage);
    console.log("Rec By Sree::",this.RecMessages);

  }
}
