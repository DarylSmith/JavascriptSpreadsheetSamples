import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JspreadsheetComponent } from './jspreadsheet.component';

describe('JspreadsheetComponent', () => {
  let component: JspreadsheetComponent;
  let fixture: ComponentFixture<JspreadsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JspreadsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JspreadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
