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

  totalRegisters: number;
  totalPages: number;
  registersPerPage: number;
  currentPage: number;

  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;

  pages: any;

  constructor(private bitcoinTrackerService: BitcoinTrackerService) { }

  ngOnInit(): void {
    this.bitcoinTrackerService.getBitcoinData().subscribe((data)=>{
      this.bitcoinData = data.Data.Data;

      this.setDefaults();
      this.totalRegisters = this.bitcoinData.length;
      this.totalPages = Math.ceil( this.totalRegisters / this.registersPerPage);
      this.endPage = this.totalPages;
      this.endIndex = Math.min(this.startIndex + this.registersPerPage -1, this.totalRegisters -1 );
      this.pages = Array.from(Array((this.endPage + 1) - this.startPage).keys()).map(index => this.startPage + index);
      console.log(this.totalRegisters);
      console.log(this.totalPages);
      console.log(this.registersPerPage);
      console.log(this.currentPage);
      console.log(this.startPage);
      console.log(this.endPage);
      console.log(this.startIndex);
      console.log(this.endIndex);
      console.log(this.pages);

      console.log();
    });
  }

  setDefaults(){
    this.registersPerPage = 10;
    this.currentPage =1;
    this.startPage =1;
    this.startIndex = (this.currentPage - 1) * this.registersPerPage;
  }

  setPages(){

  }


}
