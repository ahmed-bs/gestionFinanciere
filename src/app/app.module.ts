import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DepencesComponent } from './depences/depences.component';
import { DepenceDetailComponent } from './depences/depence-detail/depence-detail.component';
import { DepenceListComponent } from './depences/depence-list/depence-list.component';
import { DepenceItemComponent } from './depences/depence-list/depence-item/depence-item.component';
import { AddingDepencesItemsComponent } from './adding-depences-items/adding-depences-items.component';
import { EdditingDepencesItemsComponent } from './adding-depences-items/edditing-depences-items/edditing-depences-items.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DepencesComponent,
    DepenceDetailComponent,
    DepenceListComponent,
    DepenceItemComponent,
    AddingDepencesItemsComponent,
    EdditingDepencesItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
