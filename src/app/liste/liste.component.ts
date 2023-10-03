import {Component} from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {

  filmSelectionne: { titre: string, affiche: string } | null = null;

  public afficherFilm(titre: string, affiche: string) {
    this.filmSelectionne = {titre, affiche};
  }
}
