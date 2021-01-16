import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth/auth.routing';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
