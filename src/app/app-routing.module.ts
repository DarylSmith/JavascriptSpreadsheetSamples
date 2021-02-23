import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JspreadsheetComponent } from './jspreadsheet/jspreadsheet.component';
import { SpreadjsComponent } from './spreadjs/spreadjs.component';

const routes: Routes = [
  { path: 'jspreadsheet', component: JspreadsheetComponent },
  { path: 'spreadjs', component: SpreadjsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }