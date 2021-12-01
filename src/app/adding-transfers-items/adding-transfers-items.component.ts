import { Component, OnInit } from '@angular/core';
import { TransfeItem } from '../shared/item.model';
@Component({
  selector: 'app-adding-transfers-items',
  templateUrl: './adding-transfers-items.component.html',
  styleUrls: ['./adding-transfers-items.component.css']
})
export class AddingTransfersItemsComponent implements OnInit {
  transferitems: TransfeItem[] = [
    new TransfeItem('monji', 5000),
    new TransfeItem('selem', 1000),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
