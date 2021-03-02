import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BitcoinTrackerComponent } from './bitcoin-tracker/bitcoin-tracker.component';

const routes: Routes = [{
  path: '', component: BitcoinTrackerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
