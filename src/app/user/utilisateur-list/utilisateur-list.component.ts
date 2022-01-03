import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Utilisateur } from 'src/app/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
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
  deleteUtilisateur(_id: string) {
    this.userService.deleteUtilisateur(_id)
      .subscribe(
        (        data) => {
          console.log(data);
          this.reloadData();
        },
        (error) => console.log(error));
  }

  UtilisateurDetails(_id: string){
    this.router.navigate(['Utilisateurdetails', _id]);
  }
}
