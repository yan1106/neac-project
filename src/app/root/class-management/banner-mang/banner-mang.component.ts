import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ClassManagementService } from '../../class-management/class-management.service';
import { BannerDialogFormComponent } from '../banner-dialog-form/banner-dialog-form.component'
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { ConfirmationDialog } from './confirmation-dialog.component'
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
@Component({
  selector: 'ngx-banner-mang',
  templateUrl: './banner-mang.component.html',
  styleUrls: ['./banner-mang.component.scss']
})
export class BannerMangComponent implements OnInit {

  settings = {
    mode: 'external',
    hideSubHeader: false,
    pager:{
      display:true,
      perPage:5
    },
    // actions:{
    //   add: false
    // },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      title: {
        title: '標題',
        type: 'string',
      },
      startDate: {
        title: '開始時間',
        type: 'string',
      },
      endDate: {
        title: '結束時間',
        type: 'string',
      },
      link: {
        title: '連結網址',
        type: 'string',
      },
      image: {
        title: '圖片',
        type: 'html',
      },
      status: {
        title: '狀態',
        type: 'string',
      },
      // updater: {
      //   title: '更新者',
      //   type: 'number',
      // },
      // updateDateTime: {
      //   title: '更新時間',
      //   type: 'number',
      // },
    },
  };
  fileList1 = [];
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: ClassManagementService, private dialogService: MatDialog,private http: HttpClient,
    private dialog: MatDialog,private toastrService: NbToastrService) {
    // const data = this.service.getClassMangData();
    // console.log(data);
    
  }

  ngOnInit(): void {
   this.reloadData();
  }

  onDeleteConfirm(event): void {
    // console.log(event)
    let that = this;

    const dialogRef = this.dialog.open(ConfirmationDialog,{
      data:{
        title: event.data.title
      }
    });
    
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.http.delete<any>(`${environment.backendUrl}/api/ClassMangBanner/${event.data.guid}`).subscribe((data)=>{
          this.showToast('success', `title: ${event.data.title},已成功刪除!`);
          this.http.get<any>(`${environment.backendUrl}/api/ClassMangBanner`).subscribe((data)=>{              
                that.source.load(data)
              });
          });
      }
    });

   
    // if (window.confirm('Are you sure you want to delete?')) {
    //   console.log(event.data);
    //   // this.http.delete<any>(
    //   //   `${environment.backendUrl}/api/ClassMangBanner`,event.data.id).subscribe((data)=>{
    //   //     that.source.load(data)
    //   //   });
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
  }

  openEditDialog(event): void {
    console.log(event)
    const dialogRef = this.dialogService.open(BannerDialogFormComponent, {
      width: '600px',
      data: event.data
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.isVaild){
        this.reloadData()
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  showToast(status: NbComponentStatus,message: string) {
    // this.showToast.duration(5000)
    this.toastrService.show(status, message, { status });
  }

  reloadData(): void{
    let that = this;
    this.http.get<any>(
      `${environment.backendUrl}/api/ClassMangBanner`).subscribe((data)=>{
        that.source.load(data)
      });
  }

  createDialog(): void {
    const dialogRef = this.dialogService.open(BannerDialogFormComponent, {
      // height: '400px',
      width: '600px',
      disableClose: true,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.isVaild){
        this.reloadData()
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}