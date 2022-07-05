import { getLocaleFirstDayOfWeek } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  names: string[] = []; 
  pricesUsd: number[] = [];
  constructor(private http: HttpClient) { }
  
  getCurrenciesValue() {
    return this.http.get('https://api.coincap.io/v2/assets?limit=100');
    
  }


  getCurrenciesValueBarsData() {
    return this.getCurrenciesValue()
    .pipe(
        
        map(resp => {
          
          const data = Object.values(resp)
          data[0].forEach((element: any) => {
            
            this.names.push(element.name); 
            this.pricesUsd.push(+parseFloat(element.priceUsd).toFixed(10));

            if (+parseFloat(element.priceUsd).toFixed(10) >= 1) {
              this.names.pop();
              this.pricesUsd.pop();
            }

          });
          return ({names: this.names, priceUsd: this.pricesUsd})
      

        })
      );
  }

}
