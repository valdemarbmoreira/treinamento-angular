import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentM01Component } from './component-m01/component-m01.component';

const routes: Routes = [
  { path: '', component: ComponentM01Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module01RoutingModule { }
