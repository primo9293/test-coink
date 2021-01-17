import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { IngresoseguroComponent } from './ingresoseguro/ingresoseguro.component';



const routes: Routes = [
  { 
      path: 'login', 
      component: LoginComponent,
  },
  { 
    path: 'validacion', 
    component: IngresoseguroComponent
  },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
