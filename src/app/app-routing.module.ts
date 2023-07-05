import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DbService } from './services/db.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro-page',
    pathMatch: 'full'
  },
  {
    path: 'register',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'forgot-password',
    redirectTo: 'forgot-password',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'cutters',
    redirectTo: 'cutters',
    pathMatch: 'full'
  },
  {
    path: 'intro-page',
    redirectTo: 'intro-page',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },



  {
    path: 'login',
    loadChildren: () => import('./pages/userLogin/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/userLogin/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/userLogin/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/user/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'cutters',
    loadChildren: () => import('./pages/staff/cutters/cutters.module').then( m => m.CuttersPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), 
    canActivate: [DbService]
  },
  {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'intro-page',
    loadChildren: () => import('./pages/intro-page/intro-page.module').then( m => m.IntroPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
