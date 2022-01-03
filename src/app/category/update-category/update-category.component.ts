import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  idcat: string;
  category: Category;
  submitted = false;
  constructor(private route: ActivatedRoute,private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.category = new Category();

    this.idcat = this.route.snapshot.params['id'];
    
    this.categoryService.getCategory(this.idcat)
      .subscribe(data => {
        console.log(data)
        this.category = data;
      }, error => console.log(error));
  }

  updateCategory() {
    this.categoryService.updateCategory(this.idcat, this.category)
      .subscribe(data => {
        console.log(data);
        this.category = new Category();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateCategory();    
  }

  gotoList() {
    this.router.navigate(['/category']);
  }

}
