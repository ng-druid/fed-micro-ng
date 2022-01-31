import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlightsModule } from './flights/flights.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlightsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
