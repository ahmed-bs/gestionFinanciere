import { NgModule  } from '@angular/core';
import {AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

import { UtilisateurListComponent } from './user/utilisateur-list/utilisateur-list.component';
import { CreateUtilisateurComponent } from './user/create-utilisateur/create-utilisateur.component';
import { UpdateUtilisateurComponent } from './user/update-utilisateur/update-utilisateur.component';
import { UtilisateurDetailsComponent } from './user/utilisateur-details/utilisateur-details.component';

import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';

import { TransactionComponent } from './transaction/transaction.component';
import { CreateTransactionComponent } from './transaction/create-transaction/create-transaction.component';
import { UpdateTransactionComponent } from './transaction/update-transaction/update-transaction.component';
import { TransactionDetailsComponent } from './transaction/transaction-details/transaction-details.component';

import { TransactionStatComponent } from './transaction/transaction-stat/transaction-stat.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
const routes: Routes = [
 { path: '',redirectTo :'auth', pathMatch: 'full' },

 { path: 'TransactionStat', component: TransactionStatComponent },
 { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },


  { path: 'utilisateur', component: UtilisateurListComponent },
  { path: 'addUtilisateur', component: CreateUtilisateurComponent },
  { path: 'updateUtilisateur/:id', component: UpdateUtilisateurComponent },
  { path: 'Utilisateurdetails/:id', component:  UtilisateurDetailsComponent },

  { path: 'category', component: CategoryListComponent },
  { path: 'addcategory', component: CreateCategoryComponent },
  { path: 'updateCategory/:id', component: UpdateCategoryComponent },
  { path: 'categorydetails/:id', component:  CategoryDetailsComponent },
 
  { path: 'transaction', component: TransactionComponent },
  { path: 'addtransaction', component: CreateTransactionComponent },
  { path: 'updateTransaction/:id', component: UpdateTransactionComponent },
  { path: 'transactiondetails/:id', component:  TransactionDetailsComponent },
  { path: '**', component: NotfoundComponent },
 
];
@NgModule({

  imports: [
    ReactiveFormsModule, FormsModule,RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],  declarations: [
    AboutComponent,
   ContactComponent,
   NotfoundComponent,
],
})
export class AppRoutingModule {

}
