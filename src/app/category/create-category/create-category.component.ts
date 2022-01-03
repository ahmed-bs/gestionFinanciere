import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: Category = new Category();
  submitted = false;
  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newCategory(): void {
    this.submitted = false;
    this.category = new Category();
  }



  save() {
    this.categoryService
    .createCategory(this.category).subscribe((data: any) => {
      console.log(data)
      this.category = new Category();
      this.gotoList();
    }, 
      (    error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/category']);
  }

}
