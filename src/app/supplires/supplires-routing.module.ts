import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliresComponent } from './supplires.component';

const routes: Routes = [{ path: '', component: SuppliresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliresRoutingModule { }
