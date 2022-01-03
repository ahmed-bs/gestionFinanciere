import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {


  idcat: number;
  category: Category;

  constructor(private route: ActivatedRoute,private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.category = new Category();

    this.idcat = this.route.snapshot.params['idcat'];
    
    this.categoryService.getCategory(this.idcat)
      .subscribe(data => {
        console.log(data)
        this.category = data;
      }, error => console.log(error));
  }
  update(){
    this.router.navigate(['updateCategory/',this.idcat]);
  }
  list(){
    this.router.navigate(['category']);
  }
}
