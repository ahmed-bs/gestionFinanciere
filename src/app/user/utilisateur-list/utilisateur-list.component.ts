import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Utilisateur } from 'src/app/utilisateur';
import { UtilisateurService } from 'src/app/utilisateur.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {
  utilisateurs: Observable<Utilisateur[]>;
  constructor(private userService: UtilisateurService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.utilisateurs = this.userService.getUtilisateursList();
  }
  deleteUtilisateur(id: number) {
    this.userService.deleteUtilisateur(id)
      .subscribe(
        (        data) => {
          console.log(data);
          this.reloadData();
        },
        (error) => console.log(error));
  }

  UtilisateurDetails(id: number){
    this.router.navigate(['Utilisateurdetails', id]);
  }
}
