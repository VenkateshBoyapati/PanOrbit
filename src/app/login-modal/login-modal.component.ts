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
  constructor(public dialogRef: MatDialogRef<LoginModalComponent>, public dataservice:DataService,
    public router:Router) { 
    this.userdata=dataservice.userdata;
  }


  ngOnInit() {
  }
  
  actionFunction() {  
    this.dialogRef.close();
    this.router.navigate(['landing']);
  }

 

}