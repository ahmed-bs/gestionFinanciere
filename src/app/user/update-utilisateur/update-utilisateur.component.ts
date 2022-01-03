import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/utilisateur';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit {

  id: string;
  utilisateur: Utilisateur;
  submitted = false;
  constructor(private route: ActivatedRoute,private router: Router,
    private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.utilisateur = new Utilisateur();

    this.id = this.route.snapshot.params['id'];
    
    this.utilisateurService.getUtilisateur(this.id)
      .subscribe(data => {
        console.log(data)
        this.utilisateur = data;
      }, error => console.log(error));
  }

  updateUtilisateur() {
    this.utilisateurService.updateUtilisateur(this.id, this.utilisateur)
      .subscribe(data => {
        console.log(data);
        this.utilisateur = new Utilisateur();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateUtilisateur();    
  }

  gotoList() {
    this.router.navigate(['/utilisateur']);
  }

}
