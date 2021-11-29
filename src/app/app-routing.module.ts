import { NgModule } from '@angular/core';
import {AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent }

   ];
@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],  declarations: [
    AboutComponent,
   ContactComponent,
   HomeComponent,
   NotfoundComponent,
   RegisterComponent]
})
export class AppRoutingModule {

}
