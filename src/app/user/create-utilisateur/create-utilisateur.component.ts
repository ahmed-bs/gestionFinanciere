import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
@Component({
  selector: 'app-create-utilisateur',
  templateUrl: './create-utilisateur.component.html',
  styleUrls: ['./create-utilisateur.component.css']
})
export class CreateUtilisateurComponent implements OnInit {
  utilisateur: Utilisateur = new Utilisateur();
  submitted = false;
  constructor(private utilisateursService: UtilisateurService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newUtilisateur(): void {
    this.submitted = false;
    this.utilisateur = new Utilisateur();
  }



  save() {
    this.utilisateursService
    .createUtilisateur(this.utilisateur).subscribe((data: any) => {
      console.log(data)
      this.utilisateur = new Utilisateur();
      this.gotoList();
    }, 
      (    error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/utilisateur']);
  }

}
