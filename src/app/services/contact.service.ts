import {Injectable} from '@angular/core';
import {ContactForm} from "../contact/contact-form.model";

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public contactData !: ContactForm;

  addContact(data: ContactForm): void {
    this.contactData = data;
  }

  getLatestContact(): ContactForm | null {
    return this.contactData;
  }
}
