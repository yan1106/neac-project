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
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
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
    NbDatepickerModule,
    NzDatePickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  bootstrap:[]
})
export class ClassManagementModule { }
