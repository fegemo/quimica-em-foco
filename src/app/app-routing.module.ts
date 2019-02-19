import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageListComponent } from "./page-list/page-list.component";
import { ChemistryQuestComponent } from "./chemistry-quest/chemistry-quest.component";
import { DominoesComponent } from "./dominoes/dominoes.component";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: PageListComponent, data: { animation: 'toLeft'} },
  { path: "chemistry-quest", component: ChemistryQuestComponent, data: { animation: 'toRight'} },
  { path: "dominoes", component: DominoesComponent, data: { animation: 'toRight'} },
  { path: "about", component: AboutComponent, data: { animation: 'toRight'} },
  { path: "**", component: PageNotFoundComponent, data: { animation: 'toRight'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const viewComponents = routes
  .filter(r => r.component)
  .map(r => r.component);
