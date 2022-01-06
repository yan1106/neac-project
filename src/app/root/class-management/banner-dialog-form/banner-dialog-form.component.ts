import { Component, OnInit, Inject, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { environment } from '../../../../environments/environment'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';

export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    },
};

@Component({
    selector: 'banner-dialog-form',
    templateUrl: 'banner-dialog-form.component.html',
    styleUrls: ['banner-dialog-form.component.scss'],
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ],
})
export class BannerDialogFormComponent implements OnInit {
    bannerInfoData: any = {};
    bannerForm: FormGroup;
    pickerStart: any = '';
    pickerEnd: any = '';
    defaultFileList: NzUploadFile[] = [];
    fileList1: any = [...this.defaultFileList];
    isEdit: boolean = false;
    constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<BannerDialogFormComponent>, private fb: FormBuilder,
        private http: HttpClient, private dp: DatePipe, @Inject(MAT_DIALOG_DATA) public data: any,private toastrService: NbToastrService) {

    }

    ngOnInit(): void {
        this.bannerForm = this.fb.group({
            title: [null, [Validators.required]],
            startDate: [null, [Validators.required]],
            endDate: [null, [Validators.required]],
            link: [null, [Validators.required]],
            // imageUid: [null, [Validators.required]]
        });
    }

    ngAfterViewInit(): void {
        console.log(`edit`, this.data)
        if (this.data.title !== undefined) {
            this.isEdit = true;
            this.bannerForm.value.title = this.data.title;
            this.bannerForm.value.startDate = new Date(this.data.startDate);
            this.bannerForm.value.endDate = new Date(this.data.endDate);
            this.bannerForm.value.link = this.data.link;
            let ary = [this.data.imageFileModel];
            this.fileList1 = [...ary];
        }
    }

    readFile(file: File | Blob): Observable<any> {
        const reader = new FileReader();
        let loadend = fromEvent(reader, 'loadend').pipe(
            map((read: any) => {
                return read.target.result;
            })
        ); ``
        reader.readAsDataURL(file);
        return loadend;
    }

    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return !!(control && control.invalid && (control.dirty || control.touched));
    }

    submit() {
        console.log(this.bannerForm.value)
        if (this.bannerForm.valid && this.bannerForm.value.imageUid !== null) {
            console.log(environment.backendUrl)
            let that = this;
            this.bannerForm.value.startDate = this.dp.transform(this.bannerForm.value.startDate, 'yyyy-MM-dd')
            this.bannerForm.value.endDate = this.dp.transform(this.bannerForm.value.endDate, 'yyyy-MM-dd')
            this.bannerForm.value.imageUid = this.fileList1[0].uid
            console.log(this.bannerForm.value)
            if (this.isEdit) {
                this.bannerForm.value.imageFileModel = [...this.fileList1][0]
                // console.log(this.bannerForm.value)
                this.http.put<any>(
                    `${environment.backendUrl}/api/ClassMangBanner/${this.data.guid}`,
                    this.bannerForm.value).subscribe((data) => {
                        console.log(data);
                        that.showToast('success', `Banner資料更新成功`);
                        that.dialogRef.close({ isVaild: true })
                    })
            } else {
                this.http.post(`${environment.backendUrl}/api/ClassMangBanner`, this.bannerForm.value).subscribe((data) => {
                    if (data) {
                        that.showToast('success', `Banner資料新增成功`);
                        that.dialogRef.close({ isVaild: data })
                       
                        // that.dialog.closeAll()
                    }
                })
            }
        } else {
            Object.values(this.bannerForm.controls).forEach(control => {
                control.markAsTouched({ onlySelf: true });
                if (control.invalid) {
                    console.log(control)
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
        }

    }

    handleRemove = (file: any) => new Observable<boolean>((obs) => {
        console.log(obs);
    })

    customUploadReq = (item: NzUploadFile) => {
        var formData: any = new FormData();
        formData.append("file", item.file);
        let that = this;
        this.http.post(`${environment.backendUrl}/api/Uploader/Image`, formData).subscribe(function (response: any) {
            that.fileList1 = [response];
            that.bannerForm.value.imageUid = response.uid
        })
    }

    showToast(status: NbComponentStatus,message: string) {
        // this.showToast.duration(5000)
        this.toastrService.show(status, message, { status });
      }

}