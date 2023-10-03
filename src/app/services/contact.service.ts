import {Injectable} from '@angular/core';
import {ContactForm} from "../contact/contact-form.model";

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public contactData: ContactForm | null = null;

  addContact(data: ContactForm): void {
    this.contactData = data;
    console.log("form du service add : ", this.contactData);
  }

  getLatestContact(): ContactForm | null {
    return this.contactData;
  }
}
