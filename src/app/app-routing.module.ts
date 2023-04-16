import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { TablesearchComponent } from './tablesearch/tablesearch.component';
import { InfoformComponent } from './infoform/infoform.component';

const routes: Routes = [
  {path:"",component:AutocompleteComponent,pathMatch:"full"},
  {path:"dropdown",component:AutocompleteComponent},
  {path:"table",component:TablesearchComponent},
  {path:"infoform",component:InfoformComponent},
  {path:"infoform/:id",component:InfoformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
