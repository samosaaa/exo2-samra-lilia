import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
})
export class GestionComponent {
  latestContactData: any;

  constructor(private contactService: ContactService) {
    this.latestContactData = this.contactService.getLatestContact();
  }
}
