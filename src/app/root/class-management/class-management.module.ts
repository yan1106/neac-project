import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbDatepickerModule,NbToastrModule } from '@nebular/theme';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ClassManagementService } from './class-management.service'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { ConfirmationDialog } from './banner-mang/confirmation-dialog.component'
import {
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline
} from '@ant-design/icons-angular/icons';
import {
  NbWindowModule
} from '@nebular/theme';

const icons: any[] = [
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline
];
// import { MaterialFileInputModule } from 'ngx-material-file-input';
@NgModule({
  declarations: [
    BannerMangComponent,
    BannerDialogFormComponent,
    ConfirmationDialog
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
    MatDatepickerModule,
    NzUploadModule,
    NzButtonModule,
    NzIconModule.forChild(icons),
    NzImageModule,
    NbWindowModule.forChild(),
    NbToastrModule.forRoot({duration: 5000}),
    // MaterialFileInputModule
  ],
  exports: [NzIconModule,FormsModule],
  providers: [ClassManagementService],
  bootstrap: []
})
export class ClassManagementModule { }