import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from './graficas.service';


@Component({
  selector: 'app-external-library',
  templateUrl: './external-library.component.html',
  styleUrls: []
})
export class ExternalLIbraryComponent implements OnInit {

  public cryptoChartLabels: string[] = [
    //'BITCOIN', 'ETHEREUM', 'DOGECOIN'
  ];

  public cryptoChartData: ChartData<'doughnut'> = {
    labels: this.cryptoChartLabels,
    datasets: [
      { data: [
        //350, 450, 100 
      ]},
    ]
  };

  public cryptoChartType: ChartType = 'bar';
  public cryptoChartType2: ChartType = 'pie';


  constructor(private gs: GraficasService) { }

  ngOnInit(): void {

    this.gs.getCurrenciesValueBarsData()
    .subscribe( ({names, priceUsd}) => {
      this.cryptoChartData.labels = names;
      
      this.cryptoChartData.datasets[0].data = priceUsd;
      //this.cryptoChartData.datasets[0].color = '#ffffff';
      this.cryptoChartData.datasets[0].label = 'Cripto monedas inferiores al dolar';

    })

  }

}
