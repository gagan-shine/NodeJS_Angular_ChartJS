import { Component, OnInit, OnDestroy } from '@angular/core';
import { APIService } from '../../services/api.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {




  public soldProductsChartOptions: ChartOptions = { responsive: true, };
  public soldProductsChartType: ChartType = 'line';
  public soldProductschartColors: any =  [{ backgroundColor: '#c79700' }];
  public soldProductsChartLegend = true;
  public soldProductsChartPlugins = [];
  public soldProductsChartLabels: Label[] = [];
  public soldProductsChartData: ChartDataSets[] = [ { data: [], label: '' } ];




  public populationOptions: ChartOptions = { responsive: true, };
  public populationType: ChartType = 'bar';
  public populationColors: any = [{ backgroundColor: '#ed6e22' }];
  public populationLegend = true;
  public populationPlugins = [];
  public populationLabels: Label[] = [];
  public populationData: ChartDataSets[] = [ { data: [], label: '' } ];


  interval:any
  data:any;
  population_year:any
  population_number:any
  currency_title:any
  currency_val:any


  constructor(
    private APIService: APIService
  ) { 
  }

  ngOnInit(): void {

    this.get_population();
    this.get_exchange_rates();
    this.interval = setInterval(() => {
      this.get_population();
      this.get_exchange_rates();
    }, 5000);
  }

  ngOnDestroy() {
    if (this.interval) {
        clearInterval(this.interval);
    }
  }

  get_population() {
    // console.log("this.adminData ------------ ",this.adminData)
    this.APIService.get_population().then(response => {
      this.data = response;
      console.log(this.data)
      this.populationLabels = this.data.map((year:any) => year.Year)
      this.populationData[0].data = this.data.map((popu:any) => popu.Population)
      this.populationData[0].label = this.data[0].Nation
      // console.log(this.population_year, " =========== ",this.population_number)

    }, err => {
    });
  }
  get_exchange_rates() {

    this.APIService.get_exchange_rates().then(response => {
      this.data = response;
      this.soldProductsChartLabels = Object.values(this.data.rates).map((curr:any) => (curr.name+"-"+curr.unit+" ("+curr.type+")"))
      this.soldProductsChartData[0].data = Object.values(this.data.rates).map((curVal:any) => curVal.value)
      this.soldProductsChartData[0].label = 'Exchange Rates'

    }, err => {
    });

  }

}
