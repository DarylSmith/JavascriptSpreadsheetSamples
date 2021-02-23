import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as GC from "@grapecity/spread-sheets";
import * as jexcel from 'jexcel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewInit  {
  @ViewChild('spreadsheet') spreadsheet: ElementRef;
  title = 'angular-sheets';
  spreadBackColor = "aliceblue";
  sheetName = "Goods List";
  hostStyle = {
    width: "800px",
    height: "600px",
  };

  private jSpreadheetData:any = [
    ['Mazda', 2001, 2000],
    ['Pegeout', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
];
  data = [
        {
      Name: "Apple",
      Category: "Fruit",
      Price: 1,
      "Shopping Place": "Wal-Mart",
    },
    {
      Name: "Potato",
      Category: "Fruit",
      Price: 2.01,
      "Shopping Place": "Other",
    },
    {
      Name: "Tomato",
      Category: "Vegetable",
      Price: 3.21,
      "Shopping Place": "Other",
    },
    {
      Name: "Sandwich",
      Category: "Food",
      Price: 2,
      "Shopping Place": "Wal-Mart",
    },
    {
      Name: "Hamburger",
      Category: "Food",
      Price: 2,
      "Shopping Place": "Wal-Mart",
    },
    {
      Name: "Grape",
      Category: "Fruit",
      Price: 4,
      "Shopping Place": "Sun Store",
    },
  ];
  columnWidth = 100;
  
  workbookInit(args) {
    let spread: GC.Spread.Sheets.Workbook = args.spread;
    let sheet = spread.getActiveSheet();
    sheet.getCell(0, 0).text("My SpreadJS Angular Project").foreColor("blue");



  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    jexcel(this.spreadsheet.nativeElement, {
      data: this.jSpreadheetData,
        columns: [
          { title: 'Model', width: 300 },
          { title: 'Price', width: 80 },
          { title: 'Model', width: 100 }
      ],
      minDimensions: [10, 10]
    });
  }

}
