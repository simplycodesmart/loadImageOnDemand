import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private buttonClickEvent$ = new BehaviorSubject(0);
  public isLoading$ = new Subject()

  public getButtonClickStream() {
    return this.buttonClickEvent$.pipe(delay(5000), map((res) => {
      console.log(res);
      return res + 5
    }));
  }

  public setButtonClickStream() {
    this.isLoading$.next(true)
    this.buttonClickEvent$.next(this.buttonClickEvent$.value + 5)
  }
}
