import { AuthGuardService } from './services/security/auth-guard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  { path: 'vehicles-list',
   loadChildren: () => import('./pages/vehicles-list/vehicles-list.module').then (m => m.VehiclesListPageModule),
  canActivate: [AuthGuardService] },
  { path: 'driver-details',
   loadChildren: () => import('./pages/driver-details/driver-details.module').then(m => m.DriverDetailsPageModule),
  canActivate: [AuthGuardService] },
  { path: 'login',
   loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'signup',
  loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
},
  { path: 'profile',
   loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
  canActivate: [AuthGuardService] }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
