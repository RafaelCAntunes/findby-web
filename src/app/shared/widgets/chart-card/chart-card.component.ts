import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss']
})
export class ChartCardComponent implements OnInit {

    @Input() label!: string;
    @Input() total!: string;
    @Input() percentage!: string;

    dt = new Date();
    dtToday = Date.UTC(this.dt.getFullYear(), (this.dt.getMonth() + 1),this.dt.getDate());
    dtRange = (20 * 24 * 3600 * 1000); 

  Highcharts: typeof Highcharts = Highcharts;
    chartOptions: Highcharts.Options = {}

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          type: 'areaspline',
          borderWidth: 0,
          margin: [2,2,2,2],
          height: 100,


          
      },
      title: {
          text: undefined
      },
      legend: {
          
         enabled: false
      },
      
      exporting:{
          enabled:false
      },
      xAxis: {
          type: 'datetime',
          startOnTick: false,
          endOnTick: false
          
         
            
             
          
      },
      yAxis: {
          title: {
              text: undefined
          },
          startOnTick: false,
          endOnTick: false
          
      },
      tooltip: {
          shared: true,
          valueSuffix: ' units',
          outside: true
          
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          areaspline: {
              fillOpacity: 0.5
          },
          series: {
              pointStart: this.dtToday - this.dtRange,
              pointInterval: 24 * 3600 * 1000 // one day
          }
      },
      series: [{
          name: 'Acessos por dia',
          data: [3, 4, 3, 5, 4, 10, 12, 16,18,22,13,14,23],
          type: 'areaspline',
        
          
      }, ]
  };

    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
