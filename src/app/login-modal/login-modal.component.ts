import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  userdata:any=[];
  profData:any;
  constructor(public dialogRef: MatDialogRef<LoginModalComponent>, public dataservice:DataService,
    public router:Router) { 
    this.userdata=dataservice.userdata;
    this.profData=dataservice.profile;
  }


  ngOnInit() {
   
  }
  
  actionFunction() {  
    this.dialogRef.close();
    this.router.navigate(['landing']);
  }
  profile(userval){    
    this.dataservice.userId = userval.id;
    this.dataservice.userdata=userval;
   }
 

}