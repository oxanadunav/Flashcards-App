import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-statistics',
  templateUrl: './view-statistics.component.html',
  styleUrls: ['./view-statistics.component.css']
})
export class ViewStatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // lineChart
  public lineChartData:Array<any> = [
    {data: [9, 11, 13, 12, 15, 18, 20, 23, 25, 25, 21], label: 'Right'},
    {data: [16, 14, 12, 13, 10, 7, 5, 2, 0, 0, 4], label: 'Wrong'}
  ];
  public lineChartLabels:Array<any> = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(24,188,156,0.2)',
      borderColor: '#18BC9C',
      pointBackgroundColor: '#026a43',
      pointBorderColor: '#95a5a6',
      pointHoverBackgroundColor: '#2C3E50',
      pointHoverBorderColor: '#2C3E50'
    },
    {
      backgroundColor: 'rgba(231,76,60,0.2)',
      borderColor: '#E74C3C',
      pointBackgroundColor: '#8b080b',
      pointBorderColor: '#95a5a6',
      pointHoverBackgroundColor: '#2C3E50',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
