import { Component, OnInit,AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as jexcel from 'jexcel';

@Component({
  selector: 'app-jspreadsheet',
  templateUrl: './jspreadsheet.component.html',
  styleUrls: ['./jspreadsheet.component.css']
})
export class JspreadsheetComponent implements OnInit, AfterViewInit {
  @ViewChild('spreadsheet') spreadsheet: ElementRef;
  constructor() { }
  private data:any = [
    ['Mazda', 2001, 2000],
    ['Pegeout', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
];

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    jexcel(this.spreadsheet.nativeElement, {
      data: this.data,
        columns: [
          { title: 'Model', width: 300 },
          { title: 'Price', width: 80 },
          { title: 'Model', width: 100 }
      ],
      minDimensions: [10, 10]
    });
  }


}
