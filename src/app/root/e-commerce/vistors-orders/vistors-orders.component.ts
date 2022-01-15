import { Component, OnDestroy, OnInit,AfterViewInit } from '@angular/core';
import { NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { CountryOrderData } from '../../../@core/data/country-order';

@Component({
  selector: 'ngx-vistors-orders',
  styleUrls: ['./vistors-orders.component.scss'],
  template: `
    <nb-card [size]="breakpoint.width >= breakpoints.md ? 'medium' : 'giant'">
      <nb-card-header>上週來訪的人數</nb-card-header>
        <nb-card-body echarts [options]="options" class="echart"></nb-card-body>
    </nb-card>
  `,
})
export class VistorsOrdersComponent implements OnInit, OnDestroy,AfterViewInit {

  private alive = true;

  countryName = '';
  countryData: number[] = [];
  countriesCategories: string[];
  breakpoint: NbMediaBreakpoint = { name: '', width: 0 };
  breakpoints: any;
  options: any = {};
  themeSubscription: any;
  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
              private countryOrderService: CountryOrderData) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
  }

  ngAfterViewInit() {
    
  }


  ngOnInit() {
    // this.themeService.onMediaQueryChange()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(([oldValue, newValue]) => {
    //     this.breakpoint = newValue;
    //   });
    // this.countryOrderService.getCountriesCategories()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((countriesCategories) => {
    //     this.countriesCategories = countriesCategories;
    //   });
    this.themeSubscription = this.themeService.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;
      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: '人數',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220],
          },
        ],
      };
    });
  }

  // selectCountryById(countryName: string) {
  //   this.countryName = countryName;

  //   this.countryOrderService.getCountriesCategoriesData(countryName)
  //     .pipe(takeWhile(() => this.alive))
  //     .subscribe((countryData) => {
  //       this.countryData = countryData;
  //     });
  // }

  ngOnDestroy() {
    this.alive = false;
    this.themeSubscription.unsubscribe();
  }
}
