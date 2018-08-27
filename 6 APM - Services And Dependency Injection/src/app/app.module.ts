import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './component/product-list/product-list.component';
import {FormsModule} from "@angular/forms";
import {ConvertToSpaces} from "./pipes/convert-to-spaces.pipe";
import {StarComponent} from "./shared/star.component";

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpaces, StarComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
