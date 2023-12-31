import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ListeComponent} from './liste/liste.component';
import {ContactComponent} from './contact/contact.component';
import {GestionComponent} from './gestion/gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ListeComponent,
    ContactComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

