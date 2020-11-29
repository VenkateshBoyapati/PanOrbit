import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
userdata:any=[];
profData : any;
  constructor(public dataservice:DataService,public matDialog: MatDialog) {
    this.userdata=dataservice.userdata;
    this.profData=dataservice.data;

   }

  ngOnInit() {
  }
  openchat()
  {
    
    if(document.getElementById("mini").innerText=="-")
    {
      document.getElementById("chat_container").style.display = "none";
      document.getElementById("mini").innerText="+";
    }
    else{
      document.getElementById("chat_container").style.display = "block";
    document.getElementById("mini").innerText="-";
    }
  }
  openModal() {
    const dialogConfig = new MatDialogConfig();
   // dialogConfig.disableClose = true;
    dialogConfig.id = "LoginModalComponent";
    dialogConfig.height = "300px";
    dialogConfig.width = "250px";
    dialogConfig.position= { top: '50px', right: '100px' };
  
    const modalDialog = this.matDialog.open(LoginModalComponent, dialogConfig);
    
  }
}
