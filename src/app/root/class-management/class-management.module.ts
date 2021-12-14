import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { ClassManagementRoutingModule } from './class-management-routing.module';
import { BannerMangComponent } from './banner-mang/banner-mang.component';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    BannerMangComponent
  ],
  imports: [
    CommonModule,
    ClassManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule
  ]
})
export class ClassManagementModule { }
