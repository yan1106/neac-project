import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { BannerDialogFormComponent } from '../banner-dialog-form/banner-dialog-form.component'
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-banner-mang',
  templateUrl: './banner-mang.component.html',
  styleUrls: ['./banner-mang.component.scss']
})
export class BannerMangComponent implements OnInit {
  item$: Observable<any[]>;
 
  settings = {
    mode: 'external',
    hideSubHeader: false,
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
      startDateTime: {
        title: '開始時間',
        type: 'string',
      },
      endDateTime: {
        title: '結束時間',
        type: 'string',
      },
      link: {
        title: '連結網址',
        type: 'string',
      },
      pic: {
        title: '圖片',
        type: 'html',
      },
      status: {
        title: '狀態',
        type: 'number',
      },
      updater: {
        title: '更新者',
        type: 'number',
      },
      updateDateTime: {
        title: '更新時間',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load([]);
  }
  ngOnInit(): void {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  openEditDialog(event): void {
    this.dialogService.open(BannerDialogFormComponent,{});
  }

  createDialog(): void{
    this.dialogService.open(BannerDialogFormComponent,{});
  }
}