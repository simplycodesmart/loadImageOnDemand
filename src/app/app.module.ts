import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageCardComponent } from './image-card/image-card.component';
import { MaterialModule } from './material/material/material.module';
import { PinScrollDirective } from './pin-scroll.directive';


@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent,
    PinScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
