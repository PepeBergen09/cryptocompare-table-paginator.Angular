import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BitcoinTrackerComponent } from './bitcoin-tracker/bitcoin-tracker.component';
import { BitcoinTrackerService } from './bitcoin-tracker/bitcoin-tracker.service';

import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from './bitcoin-tracker/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    BitcoinTrackerComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BitcoinTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
