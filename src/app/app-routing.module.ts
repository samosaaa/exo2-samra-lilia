import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ListeComponent} from "./liste/liste.component";
import {ContactComponent} from "./contact/contact.component";
import {GestionComponent} from "./gestion/gestion.component";

const routes: Routes = [
  {path: '', component: AccueilComponent, pathMatch: "full"},
  {path: 'liste', component: ListeComponent},
  { path: 'gestion', component: GestionComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: AccueilComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
