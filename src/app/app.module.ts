import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JspreadsheetComponent } from './jspreadsheet/jspreadsheet.component';
import { AppRoutingModule } from './/app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SpreadjsComponent } from './spreadjs/spreadjs.component';

import { SpreadSheetsModule } from "@grapecity/spread-sheets-angular";

@NgModule({
  declarations: [
    AppComponent,
    JspreadsheetComponent,
    SpreadjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpreadSheetsModule
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
