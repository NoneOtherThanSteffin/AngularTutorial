import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {FormsModule} from "@angular/forms";
import {ConvertToSpaces} from "./custom-pipes/convert-to-spaces.pipe";

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpaces],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
