import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private baseUrl = 'https://v6.exchangerate-api.com/v6/YOUR-API-KEY';

  constructor(private http: HttpClient) { }

  /**
   * Fetches the latest exchange rates for GBP.
   * @returns Observable with the exchange rates for GBP.
   */
  getLatestGBPExchangeRates(): Observable<any> {
    const url = `${this.baseUrl}/latest/GBP`;
    return this.http.get(url);
  }
}

