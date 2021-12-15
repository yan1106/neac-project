import { Component,OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'banner-dialog-form',
  templateUrl: 'banner-dialog-form.component.html',
  styleUrls: ['banner-dialog-form.component.scss'],
})
export class BannerDialogFormComponent implements OnInit {
  bannerInfoData: any = {};
  bannerForm: FormGroup;
  pickerStart: any = '';
  pickerEnd: any = '';
  constructor(public dialog: MatDialog,private fb: FormBuilder) {

  }

  ngOnInit(): void {
    // this.bannerForm = new FormGroup({
    //   title: new FormControl(''),
    // });
    this.bannerForm = this.fb.group({
      title: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
    });
  }
  

  submit(data) {
    console.log(data)
  }
}
