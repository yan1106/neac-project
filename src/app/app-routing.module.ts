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
    path: 'auth',
    component: NbAuthComponent,
    canActivate: [AuthNoGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import('./root/root.module').then(m => m.PagesModule),
    canActivate: [AuthGuard]
  },  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
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
