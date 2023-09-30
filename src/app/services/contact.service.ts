import { Injectable } from '@angular/core';
import {ContactForm} from "../contact/contact-form.model";

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public contactData : ContactForm | null=null;

  addContact(data: ContactForm) {
    this.contactData = (data);
  }

  getLatestContact() : ContactForm | null{
    return this.contactData;
  }
}
