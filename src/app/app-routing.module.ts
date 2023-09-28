import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {ListeComponent} from "./liste/liste.component";
import {ContactComponent} from "./contact/contact.component";
import {GestionComponent} from "./gestion/gestion.component";

const routes: Routes = [
  {path: '', component: AccueilComponent, pathMatch: "full"},
  {path: 'liste', component: ListeComponent},
  { path: 'gestion', component: GestionComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
