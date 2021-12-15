import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbDatepickerModule } from '@nebular/theme';
import { ClassManagementRoutingModule } from './class-management-routing.module';
import { BannerMangComponent } from './banner-mang/banner-mang.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbMomentDateModule } from '@nebular/moment'
import { BannerDialogFormComponent } from './banner-dialog-form/banner-dialog-form.component';
@NgModule({
  declarations: [
    BannerMangComponent,
    BannerDialogFormComponent
  ],
  imports: [
    CommonModule,
    ClassManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    NbCardModule, 
    NbIconModule, 
    NbInputModule, 
    NbTreeGridModule,
    Ng2SmartTableModule,
    NbMomentDateModule,
    NbDatepickerModule
  ]
})
export class ClassManagementModule { }
