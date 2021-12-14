import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent
} from '@nebular/auth';
import { LoginComponent } from './root/auth/login/login.component'
import { AuthGuard } from './@auth-guard/auth-guard.service'
import { AuthNoGuard } from './@auth-guard/auth-no-guard.service'
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./root/pages.module').then(m => m.PagesModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    // canActivate: [AuthNoGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
