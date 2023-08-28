import { Component, ViewChild } from '@angular/core';
import { mockData } from './data/data';
import { Data } from './model/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('focus') myDivRef: any;
  public data: Data[];
  public intial = 5;
  constructor() {
    this.data = mockData
  }
  public loadImages($event: any) {
    this.intial += 5;
    this.myDivRef.nativeElement.scrollIntoView();
  }
  public resetView() {
    this.intial = 5;

  }
}
