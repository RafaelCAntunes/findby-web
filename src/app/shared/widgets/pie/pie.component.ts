import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {


  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {}

    testData :  Array<{name:string,y:number}> = [{
      name: 'Produto 1',
      y: 61.41,     
  }, {
      name: 'Produto 2',
      y: 11.84
  }, {
      name: 'Produto 3',
      y: 10.85
  }, {
      name: 'Produto 4',
      y: 4.67
  }, {
      name: 'Produto 5',
      y: 4.18
  }, {
      name: 'Produto 6',
      y: 1.64
  }, {
      name: 'Produto 7',
      y: 1.6
  }, {
      name: 'Produto 8',
      y: 1.2
  }, {
      name: 'Produto 9',
      y: 2.61
  }];
   
   
 


  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          plotBackgroundColor: undefined,
          plotBorderWidth: undefined,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Acessos por produto'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          type: 'pie',
          name: 'Brands',
          colorByPoint: true,
          data: this.testData
      }]
  };

    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }

}
