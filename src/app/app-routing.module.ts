import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { ToDoComponent } from './to-do/to-do.component';


const routes: Routes = [

  {
    path:"",
    component:LandingComponent,

  },
  {
    path:"landing",
    component:LandingComponent
  },
  {
    path:"navigation",
    component:NavigationComponent,
    children:[
      {
        path:"gallery",
        component:GalleryComponent
      },
      {
        path:"todo",
        component:ToDoComponent
      },
      {
        path:"posts",
        component:PostComponent
      },
      {
        path:"profile",
        component:ProfileComponent
      }
     
      
    ]
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
