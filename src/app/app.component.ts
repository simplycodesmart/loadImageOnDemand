import { Component, ViewChild } from '@angular/core';
import { mockData } from './data/data';
import { Data } from './model/data';
import { DataTransferService } from './services/data-transfer.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('focus') myDivRef: any;
  public data: Data[];
  public intial = 5;
  constructor(public dataTransferService: DataTransferService) {
    this.data = mockData;
    this.dataTransferService.getButtonClickStream().pipe(catchError(err => of(5))).subscribe(res => {
      this.intial = res;
      this.dataTransferService.isLoading$.next(false)
    })
  }

  public resetView() {
    this.dataTransferService.setButtonClickStream()
  }
}
