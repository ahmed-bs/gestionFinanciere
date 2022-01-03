import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm : FormGroup;


  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
islogg =0;
  signupUser() {
    this.authService.login(this.loginForm.value).subscribe(res => {
      if(res.status == 200) {
        this.loginForm.reset();
        this.islogg =1;
        this.router.navigate(['/TransactionStat']);
      }
    });
  }

  constructor( public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router) {this.islogg }
}


