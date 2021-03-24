import { Injectable } from '@angular/core';
import { Coin } from './coin.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  coinList: Coin[];


  readonly rootUrl = "http://localhost:50000/api/coins/getcoins";


  constructor(private http:HttpClient) { }


  // Get Coins data to display on table
  getSortedCoins(sort, lines):Observable<Coin[]>
  {
    return this.http.get<Coin[]>(this.rootUrl + "/" + sort + "/" + lines);
  } 
}