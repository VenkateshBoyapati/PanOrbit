import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  data: any;
  constructor( public dataService:DataService, public router:Router) {
     this.data = dataService.data;
    
   }
   ngOnInit() {
  }

  profile(userval){  
   this.dataService.userId = userval.id;
   this.dataService.userdata=userval;
  this.router.navigate(['navigation/profile']);
  }
}



