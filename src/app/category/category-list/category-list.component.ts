import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Observable<Category[]>;
  constructor(private categoryService: CategoryService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.categories = this.categoryService.getCategoriesList();
  }
  deleteCategory(idcat: string) {
    this.categoryService.deleteCategory(idcat)
      .subscribe(
        (        data) => {
          console.log(data);
          this.reloadData();
        },
        (error) => console.log(error));
  }

  CategoryDetails(idcat: string){
    this.router.navigate(['categorydetails',idcat]);
  }

}
