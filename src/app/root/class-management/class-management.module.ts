import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassManagementRoutingModule } from './class-management-routing.module';
import { BannerMangComponent } from './banner-mang/banner-mang.component';


@NgModule({
  declarations: [
    BannerMangComponent
  ],
  imports: [
    CommonModule,
    ClassManagementRoutingModule
  ]
})
export class ClassManagementModule { }
