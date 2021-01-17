import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { NopagefoundComponent } from './components/nopagefound.component';

@NgModule({
  declarations: [
    NopagefoundComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule {

}
