import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentM02Component } from './component-m02/component-m02.component';

const routes: Routes = [
  { path: '', component: ComponentM02Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module02RoutingModule { }
