import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';
import {ContactForm} from "./contact-form.model";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService,private router: Router) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null],
      hideEmail: [false],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required]
    });
  }


  onSubmit(): void {
    if (this.contactForm.valid) {
      const test: ContactForm = this.contactForm.value
      this.contactService.addContact(test);

      alert('Le formulaire est valide');
      this.router.navigateByUrl('/');
    } else {
      alert('Le formulaire n\'est pas valide');
    }

  }
}
