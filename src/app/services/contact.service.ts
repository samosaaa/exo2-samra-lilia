import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactData: any[] = [];

  addContact(data: any) {
    this.contactData.push(data);
  }

  getLatestContact() {
    return this.contactData[this.contactData.length - 1];
  }
}
