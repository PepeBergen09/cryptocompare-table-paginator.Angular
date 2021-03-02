import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BitcoinTrackerService {

  private baseurl = 'https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2';

  constructor(private http: HttpClient) { }

  getBitcoinData(){
    return this.http.get<any>(this.baseurl);
  }
}
