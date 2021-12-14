/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbInputModule
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './root/auth/login/login.component'
import { AuthGuard } from './@auth-guard/auth-guard.service'
import { AuthNoGuard } from './@auth-guard/auth-no-guard.service'
@NgModule({
  declarations: [AppComponent,LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbInputModule,
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  providers: [AuthGuard,AuthNoGuard],
  bootstrap: [AppComponent],
})
export class AppModule {
}
