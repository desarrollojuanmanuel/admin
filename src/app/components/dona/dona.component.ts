import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color} from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input('valor') valor:any
  @Input('titulo') title:any
  @Input('datos') datos:any = [255,155,655]

  constructor() { }

  ngOnInit(): void {
    console.log(this.datos)
  }

    // Doughnut
    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.datos},
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';
  
    // events
    public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }

}
