import { Component, OnInit } from '@angular/core';
import { BitcoinTrackerService } from './bitcoin-tracker.service';

@Component({
  selector: 'app-bitcoin-tracker',
  templateUrl: './bitcoin-tracker.component.html',
  styleUrls: ['./bitcoin-tracker.component.scss']
})
export class BitcoinTrackerComponent implements OnInit {
  bitcoinData = [
    {
      time: Number,
      high: Number,
      low: Number,
      open: Number,
      volumefrom: Number,
      volumeto: Number,
      close: Number,
      conversionType: String,
      conversionSymbol: String,
    }
  ];

  constructor(private bitcoinTrackerService: BitcoinTrackerService) { }

  ngOnInit(): void {
    this.bitcoinTrackerService.getBitcoinData().subscribe((data)=>{
      this.bitcoinData = data.Data.Data;
    });
    }
}
