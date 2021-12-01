import { Component, OnInit } from '@angular/core';
import { Revenu } from '../revenu.model';

@Component({
  selector: 'app-revenu-list',
  templateUrl: './revenu-list.component.html',
  styleUrls: ['./revenu-list.component.css']
})
export class RevenuListComponent implements OnInit {

    revenus: Revenu[] = [
      new Revenu(
        'A Test Revenu',
        'This is simply a test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
      ),
      new Revenu(
        'A Test Revenu',
        'This is simply a test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
      ),
      new Revenu(
        'A Test Revenu',
        'This is simply a test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
      ),
    ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
