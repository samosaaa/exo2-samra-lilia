import {Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';
import {ContactForm} from "../contact/contact-form.model";

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
})
export class GestionComponent implements OnInit {
  latestContactData: ContactForm | null | undefined;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.latestContactData = this.contactService.getLatestContact();
  }
}
