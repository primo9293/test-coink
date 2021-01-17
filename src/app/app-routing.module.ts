import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/components/nopagefound.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
  {
    path: 'consulta',
    // canActivate: [AdminGuard],
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '**',
    loadChildren: () => import('./nopagefound/page-not-found.module').then(m => m.PageNotFoundModule)
  },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
