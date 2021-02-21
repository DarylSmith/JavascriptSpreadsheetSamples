import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JspreadsheetComponent } from './jspreadsheet/jspreadsheet.component';

const routes: Routes = [
  { path: 'test', component: JspreadsheetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }