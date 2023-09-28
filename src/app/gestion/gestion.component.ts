import { Component } from '@angular/core';
import { ContactService } from '../contact/contact.service'; // Importez le service

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
})
export class GestionComponent {
  latestContactData: any;

  constructor(private contactService: ContactService) {
    this.latestContactData = this.contactService.getLatestContact(); // Obtenez les données du dernier formulaire
  }
}
