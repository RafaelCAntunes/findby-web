import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
    
    dt = new Date();
    dtToday = Date.UTC(this.dt.getFullYear(), (this.dt.getMonth() + 1),this.dt.getDate());
    dtRange = (20 * 24 * 3600 * 1000); 
    
    Highcharts: typeof Highcharts = Highcharts;
    chartOptions: Highcharts.Options = {}
    
  
  
  
  constructor() {}

  ngOnInit() : void {

    this.chartOptions = {
        chart: {
            type: 'areaspline'
            
        },
        title: {
            text: 'Quantidade de acessos à Loja'
        },
        legend: {
            
           enabled: false
        },
        
        exporting:{
            enabled:true
        },
        xAxis: {
            type: 'datetime',
            
           
              
               
            
        },
        yAxis: {
            title: {
                text: ''
            },
            
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
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
