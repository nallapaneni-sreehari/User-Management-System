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
  public writeMsg=false;
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
    // {from:"Sattar", to:"Sreehari", msg:"Hi how are you ? It's Sattar", date:"09-15-2021 12:30 PM", type:"rec", status:"unread" },
    // {from:"Pavan",to:"Sreehari", msg:"Hi bro Iam Pavan !", date:"09-15-2021 2:30 PM", type:"rec", status:"read" },
    // {from:"Clinton", to:"Sreehari",msg:"Clinton Here ?", date:"09-15-2021 1:30 PM", type:"rec", status:"unread" },
    // {from:"Param",to:"Sreehari", msg:"Paramsivam is waiting for bus ?", date:"09-15-2021 1:30 PM", type:"rec", status:"unread" },
    // {from:"Surendra",to:"Sreehari", msg:"Surendra went to market ?", date:"09-15-2021 1:30 PM", type:"rec", status:"read" },
    // {from:"Soumyajit",to:"Sreehari", msg:"Soumyajit is Online ?", date:"09-15-2021 1:30 PM", type:"rec", status:"read" },



    // {to:"Sattar", from:"Sreehari", msg:"Hi Sattar, how are you ?", date:"09-15-2021 12:40 PM", type:"sent", status:"sent" },
    // {to:"Pavan",from:"Sreehari", msg:"Hi Pavan !", date:"09-15-2021 2:34 PM", type:"sent", status:"sent" },
    // {to:"Clinton", from:"Sreehari",msg:"Hi Clinton ?", date:"09-15-2021 1:31 PM", type:"sent", status:"sent" },
    // {to:"Param",from:"Sreehari", msg:"Paramsivam Hi", date:"09-15-2021 1:32 PM", type:"sent", status:"sent" },
    // {to:"Surendra",from:"Sreehari", msg:"Surendra Hello", date:"09-15-2021 1:37 PM", type:"sent", status:"sent" },
    // {to:"Soumyajit",from:"Sreehari", msg:"Soumyajit Hii", date:"09-15-2021 1:34 PM", type:"sent", status:"sent" },

]

  public messages:any = []

  public sentMessage:any=[
    // {msg:"Hi bro, How are you doing ure from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney C ?"
    // ,to:"Sattar", date:"09-10-2021 12:25 PM", status:"sent", type:"sent"},

    // {msg:"Hello bro, Status of project ?",to:"Clinton", date:"09-10-2021 2:32 PM", status:"sent", type:"sent"},

    // {msg:"Hello bro, Status of project ?",to:"Sattar", date:"09-10-2021 12:33 PM", status:"sent", type:"sent"},
    // {msg:"Hello bro, Status of project ?",to:"Pavan", date:"09-10-2021 1:32 PM", status:"sent", type:"sent"},

    // {msg:"Hi bro, How to apply OD ?",to:"Surendra", date:"09-10-2021 3:03 PM", status:"sent", type:"sent"},
    // {msg:"Hi bro, Are your leaves accepted ?",to:"Param", date:"09-09-2021 4:04 PM", status:"sent", type:"sent"},
    // {msg:"Hi bro, What are you learning bro ?",to:"Pavan", date:"09-09-2021 1:25 PM", status:"sent", type:"sent"},
    // {msg:"Hi bro, Is it ok if we discuss it in meeting ?",to:"Soumyajit", date:"09-10-2021 12:25 PM", status:"sent", type:"sent"},
  ];

  public RecMessages:any=[];

  public selectedChat:any=[];
  
  
  ngOnInit(): void {
    this.getAllMessages();
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
      let newMsg = {
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
    this.sendMsg=[];
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
      // for(let m of this.allMessages){
      //   if(m.msgFrom === 'sreehari'){
      //     m.name = m.msgTo;
      //     this.messages.push(m);
      //   }
      //   else if(m.msgTo === 'sreehari'){
      //     m.name = m.msgFrom;
      //     this.messages.push(m);
      //   }
      // }
      // console.log("Before::",this.messages);

      // this.messages = [...new Map(this.messages.map((item:any) =>
      //   [item['name'], item])).values()];

      // console.log("After::",this.messages);

      // console.log("Sent By Sree::",this.sentMessage);
      // console.log("Rec By Sree::",this.RecMessages);

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
