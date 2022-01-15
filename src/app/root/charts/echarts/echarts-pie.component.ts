import { AfterViewInit, Component, OnDestroy,Input } from '@angular/core';
import { NbThemeService,NbMediaBreakpointsService,NbMediaBreakpoint } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-pie',
  templateUrl: './echarts-pie.component.html',
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  breakpoint: NbMediaBreakpoint = { name: '', width: 0 };
  breakpoints: any;
  @Input() optionsData: any = {};
  @Input() chartsPieTitle: string = '';
  constructor(private theme: NbThemeService,private breakpointService: NbMediaBreakpointsService,) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      this.options = {
        backgroundColor: echarts.bg,      
        // color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        color: [colors.warningLight, colors.infoLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.optionsData.legend.data,
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: this.optionsData.series.name,
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            data: this.optionsData.series.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
