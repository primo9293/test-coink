import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaComponent } from './consulta/consulta.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
       ConsultaComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    ConsultaComponent,
  ]
})
export class PagesModule { }
