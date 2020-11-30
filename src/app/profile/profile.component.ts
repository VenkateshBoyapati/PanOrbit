import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';

declare var google: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   
   
  map: any;
chatvis=false;
  profData : any;
  userId: number;
userdata:any=[];
  constructor( public dataService:DataService,public matDialog: MatDialog) {
    this.profData = dataService.data;
    this.userId = dataService.userId;
    this.userdata=dataService.userdata;    
   }

  ngOnInit() {
   const lat = this.dataService.userdata.address.geo.lat;
   const lng = this.dataService.userdata.address.geo.lng;

   const coordinates = new google.maps.LatLng(lat, lng);
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center:coordinates

    });
    var marker = new google.maps.Marker({
      position: coordinates,
      title:"Location is here."
  });
  
  
  marker.setMap(this.map);
  }
  openchat()
  {
    
    if(document.getElementById("mini").className=="arrowdown")
    {
      document.getElementById("chat_container").style.display = "none";
      document.getElementById("mini").className="arrowup"
    }
    else{
      document.getElementById("chat_container").style.display = "block";
    document.getElementById("mini").className="arrowdown";
    }
  }
  openModal() {
    const dialogConfig = new MatDialogConfig();
   // dialogConfig.disableClose = true;
    dialogConfig.id = "LoginModalComponent";
    dialogConfig.height = "340px";
    dialogConfig.width = "250px";
    dialogConfig.position= { top: '60px', right: '200px' };
  
    const modalDialog = this.matDialog.open(LoginModalComponent, dialogConfig);
    
  }

}
