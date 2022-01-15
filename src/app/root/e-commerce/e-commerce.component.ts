import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  classStatisticsOptionsData: any = {
    legend:{
      data: ['常訓','密集','親子','個別']
    },
    series:{
      name: '課程數量',
      data: [
        { value: 335, name: '常訓' },
        { value: 310, name: '密集' },
        { value: 234, name: '親子' },
        { value: 1548, name: '個別' },
      ],
    }
  }

  memberStatisticsOptionsData: any = {
    legend:{
      data: ['路過','親友','廣告','網路']
    },
    series:{
      name: '會員數量',
      data: [
        { value: 123, name: '路過' },
        { value: 5, name: '親友' },
        { value: 10, name: '廣告' },
        { value: 1500, name: '網路' },
      ],
    }
  }

  areaStatisticsOptionsData: any = {
    legend:{
      data: ['北區','中區','西區','南區']
    },
    series:{
      name: '地區數量',
      data: [
        { value: 156, name: '北區' },
        { value: 5, name: '中區' },
        { value: 1000, name: '西區' },
        { value: 789, name: '南區' },
      ],
    }
  }

  onInit(): void{
  }
}
