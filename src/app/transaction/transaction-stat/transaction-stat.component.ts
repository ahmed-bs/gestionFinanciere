import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, mergeMap, Observable, of, Subject, takeUntil } from 'rxjs';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/transaction';

@Component({
  selector: 'app-transaction-stat',
  templateUrl: './transaction-stat.component.html',
  styleUrls: ['./transaction-stat.component.css']
})
export class TransactionStatComponent implements OnInit {


  products: any[];
    destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: TransactionService) {
   }
   totrev =0;

  ngOnInit(): void {
   
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      this.products = data;

    for (let i = 0; i < this.products.length; i++) {

      this.totrev = this.totrev +Number(this.products[i].montant) ;
    
    }
    })  
  }


  greet(  ) : Number {

   let totrev =0;
  let k =  this.dataService.sendGetRequest().subscribe((data)=>{
      this.products = data;

    for (let i = 0; i < this.products.length; i++) {

      totrev = Number(totrev) +Number(this.products[i].montant) ;
    
    }
    console.log(totrev + "0000");
    

    }) 
    console.log( totrev + "111");
    return totrev;
}

totdep =   Number(this.greet( ) );


tottrans = 48858;



  surveyData = [];
  saleData = [
    { name: "Revenus", value:  Number(this.totrev)},
    { name: "Depences", value: this.tottrans },
    { name: "Transferts", value: 15000 },
  ];


 





}
