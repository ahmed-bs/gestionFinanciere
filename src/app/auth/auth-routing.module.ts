import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [ 
   { path: '', redirectTo: 'login', pathMatch: 'full' },

]
@NgModule({
  imports: [  HttpClientModule,ReactiveFormsModule,
    FormsModule,RouterModule.forChild(routes),],
  exports: [RouterModule],
  declarations: [

  ]
})
export class AuthRoutingModule { }
