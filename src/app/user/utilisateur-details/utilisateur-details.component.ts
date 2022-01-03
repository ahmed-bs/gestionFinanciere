import { Component, OnInit ,Input} from '@angular/core';
import { Utilisateur } from 'src/app/utilisateur';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
@Component({
  selector: 'app-utilisateur-details',
  templateUrl: './utilisateur-details.component.html',
  styleUrls: ['./utilisateur-details.component.css']
})
export class UtilisateurDetailsComponent implements OnInit {


  id: string;
  utilisateur: Utilisateur;

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
  update(){
    this.router.navigate(['updateUtilisateur/',this.id]);
  }
  list(){
    this.router.navigate(['utilisateur']);
  }
}
