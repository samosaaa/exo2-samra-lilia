import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData = {
    firstName: '',
    lastName: '',
    age: null,
    hideEmail: false,
    email: '',
    comment: '',
  };

  constructor(private contactService: ContactService) {} // Injectez le service

  onSubmit() {
    if (this.formData.hideEmail || this.formData.email.includes('@')) {
      alert('Le formulaire est valide');
      this.contactService.addContact(this.formData); // Enregistrez les données du formulaire avec le service
    } else {
      alert('L\'email n\'est pas valide');
    }
  }
}
