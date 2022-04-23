import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyCRoutingModule } from './lazy-c-routing.module';
import { LazyCComponent } from './lazy-c.component';


@NgModule({
  declarations: [
    LazyCComponent
  ],
  imports: [
    CommonModule,
    LazyCRoutingModule
  ]
})
export class LazyCModule { }
