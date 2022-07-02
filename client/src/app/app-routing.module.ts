import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ErrorComponent } from './pages/error/error.component';
import { EventsComponent } from './pages/events/events.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SingleEventComponent } from './pages/single-event/single-event.component';

const routes: Routes = [
  {path:"" , component:IndexComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"gallery" , component:GalleryComponent},
  {path:"events" , component:EventsComponent},
  {path:"events/:id" , component:SingleEventComponent},
  {path:"events" , children:[
    // localhost:4200/events
    {path:"" , component:EventsComponent },
    // localhost:4200/events/2
    {path : ":eventId" , component:SingleEventComponent },
    // localhost:4200/posts/single-event
    {path : "single-event" , component:SingleEventComponent },
  ]},
  {path:"edit-profile" , component:EditProfileComponent},
  
  {path:"**" , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
