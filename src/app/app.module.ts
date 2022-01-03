import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './transaction/transaction.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { CreateUtilisateurComponent } from './user/create-utilisateur/create-utilisateur.component';
import { UtilisateurDetailsComponent } from './user/utilisateur-details/utilisateur-details.component';
import { UtilisateurListComponent } from './user/utilisateur-list/utilisateur-list.component';
import { UpdateUtilisateurComponent } from './user/update-utilisateur/update-utilisateur.component';

import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';

import { TransactionDetailsComponent } from './transaction/transaction-details/transaction-details.component';
import { CreateTransactionComponent } from './transaction/create-transaction/create-transaction.component';
import { UpdateTransactionComponent } from './transaction/update-transaction/update-transaction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TransactionStatComponent } from './transaction/transaction-stat/transaction-stat.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
 
    NavbarComponent,
    SidebarComponent,
      CreateUtilisateurComponent,
      UtilisateurDetailsComponent,
      UtilisateurListComponent,
      UpdateUtilisateurComponent,
      CategoryListComponent,
      CategoryDetailsComponent,
      CreateCategoryComponent,
      UpdateCategoryComponent,

      TransactionComponent,
      TransactionDetailsComponent,
      CreateTransactionComponent,
      UpdateTransactionComponent,

      AppComponent,
        TransactionStatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule,
     BrowserAnimationsModule,
     NgxChartsModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
