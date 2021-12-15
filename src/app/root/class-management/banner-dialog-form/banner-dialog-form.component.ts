import { Component,AfterViewInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'banner-dialog-form',
  templateUrl: 'banner-dialog-form.component.html',
  styleUrls: ['banner-dialog-form.component.scss'],
})
export class BannerDialogFormComponent  {
  bannerInfoData: any = {};
  
  constructor(protected ref: NbDialogRef<BannerDialogFormComponent>) {
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log(this.bannerInfoData);
    this.ref.close();
  }
}
