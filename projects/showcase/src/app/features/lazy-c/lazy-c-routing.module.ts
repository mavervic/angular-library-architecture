import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyCComponent } from './lazy-c.component';

const routes: Routes = [{ path: '', component: LazyCComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyCRoutingModule { }
