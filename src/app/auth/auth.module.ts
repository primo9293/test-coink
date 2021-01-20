import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../shared/material/material.module';
import { IngresoseguroComponent } from './ingresoseguro/ingresoseguro.component';
import { LogintemplateComponent } from './logintemplate/logintemplate.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    IngresoseguroComponent,
    LogintemplateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    LogintemplateComponent    
  ]
})
export class AuthModule { }