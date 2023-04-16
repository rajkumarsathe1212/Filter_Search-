import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { TablesearchComponent } from './tablesearch/tablesearch.component';
import { SharedModule } from './shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { InfoformComponent } from './infoform/infoform.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    TablesearchComponent,
    InfoformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
    FormsModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
