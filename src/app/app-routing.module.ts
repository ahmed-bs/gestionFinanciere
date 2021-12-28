import { NgModule } from '@angular/core';
import {AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CreateTransactionComponent } from './transaction/create-transaction/create-transaction.component';
import { UpdateTransactionComponent } from './transaction/update-transaction/update-transaction.component';
import { TransactionDetailsComponent } from './transaction/transaction-details/transaction-details.component';
import { UtilisateurListComponent } from './user/utilisateur-list/utilisateur-list.component';
import { CreateUtilisateurComponent } from './user/create-utilisateur/create-utilisateur.component';
import { UpdateUtilisateurComponent } from './user/update-utilisateur/update-utilisateur.component';
import { UtilisateurDetailsComponent } from './user/utilisateur-details/utilisateur-details.component';
const routes: Routes = [
  { path: '', component: TransactionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'utilisateur', component: UtilisateurListComponent },
  { path: 'addUtilisateur', component: CreateUtilisateurComponent },
  { path: 'updateUtilisateur/:id', component: UpdateUtilisateurComponent },
  { path: 'Utilisateurdetails/:id', component:  UtilisateurDetailsComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'addtransaction', component: CreateTransactionComponent },
  { path: 'updateTransaction/:id', component: UpdateTransactionComponent },
  { path: 'transactiondetails/:id', component:  TransactionDetailsComponent },

  { path: '**', component: NotfoundComponent },
];
@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],  declarations: [
    AboutComponent,
   ContactComponent,
   NotfoundComponent,
   LoginComponent,
   RegisterComponent]
})
export class AppRoutingModule {

}
