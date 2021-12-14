import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerMangComponent } from './banner-mang/banner-mang.component'
import { ClassManagementComponent } from './class-management.component'
const routes: Routes = [{
  path: '',
  component: ClassManagementComponent,
  children: [
    {
      path: '/banner-mang',
      component: BannerMangComponent,
    },
    {
      path: '/class-mang',
      redirectTo: 'banner-mang',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: BannerMangComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassManagementRoutingModule { }
