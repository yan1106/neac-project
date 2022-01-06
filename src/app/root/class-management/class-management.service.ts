import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'

@Injectable()
export class ClassManagementService {
  _baseUrl: string;
  constructor(
    private http: HttpClient,
  ) {
    // this._baseUrl = baseUrl
  }

  // getClassMangData(): Observable<any>{
  //   return this.http.get<any>(
  //     `${environment.backendUrl}/api/ClassMangBanner`).subscribe((data)=>{
  //       Observable
  //     });
  //     // .subscribe((data)=>{
  //     //   console.log(data);
  //     //   // return data;
  //     // })
  // }
}
