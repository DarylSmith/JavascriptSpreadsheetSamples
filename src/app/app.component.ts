import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as GC from "@grapecity/spread-sheets";
import * as jexcel from 'jexcel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewInit  {
  
  //this adds the JSpreadsheet Element
  @ViewChild('spreadsheet') spreadsheet: ElementRef;
  
  //styling for SpreadJS
  public SpreadJSWidth=100;
  public title = 'angular-sheets';
  public spreadBackColor = "aliceblue";
  public sheetName = "Sleep";
  public hostStyle = {
    width: "800px",
    height: "600px",
  };


  private daysOfTheWeek=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  //this holds the data for spreadJs and SpreadsheetJS
  public SpreadJsData =[];
  public JSpreadsheetData=[];

  ngOnInit(): void {

    //set up the data arrays for each
    this.daysOfTheWeek.forEach((day:string,index:number)=>{

      this.SpreadJsData.push(
        {
          Day: day,
          HoursInBed:0,
          HoursAsleep:0,
        }
      );
     

      this.JSpreadsheetData.push(
        [day,'01/01/2021',0,0,`=(D${index}/C${index})*100`]
      );


    });


  }


  // set the dropdowns for SpeadJS
  workbookInit(args) {
    let style = new GC.Spread.Sheets.Style();
    style.cellButtons = [
        {
            imageType: GC.Spread.Sheets.ButtonImageType.dropdown,
            command: "openDateTimePicker",
            useButtonStyle: true,
        }
    ];
    style.dropDowns = [
        {
            type: GC.Spread.Sheets.DropDownType.dateTimePicker,
             option: {
                showTime: true,
             }
        }
      ];

    let spread: GC.Spread.Sheets.Workbook = args.spread;
    let sheet = spread.getActiveSheet();

    for(let i=0;i<this.daysOfTheWeek.length;i++ ){
    sheet.setStyle(i, 1, style);
    sheet.setFormula(i,4,`=(D${i+1}/C${i+1})*100`)
    spread.commandManager().execute({ cmd: "openDateTimePicker", row: i, col: 1, sheetName: "Sheet1" });
    }



  }


  ngAfterViewInit() {
    jexcel(this.spreadsheet.nativeElement, {
      data: this.JSpreadsheetData,
        columns: [
          { title: 'Day', width: 300 },
          { title: 'Date', width: 300, type: 'calendar', options: { format:'DD/MM/YYYY', time:0 } },
          { title: 'HoursInBed', width: 80,type: 'numeric'  },
          { title: 'HoursAsleep', width: 100,type: 'numeric' },
          { title:'Sleep Efficiency', type: 'text',  width:'100' },
      ],
      minDimensions: [10, 10]
    });
  }

}
