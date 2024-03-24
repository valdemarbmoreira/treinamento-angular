import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentM02Component } from './component-m02/component-m02.component';
import { Module02RoutingModule } from './module02-routing.module';



@NgModule({
  declarations: [
    ComponentM02Component
  ],
  imports: [
    CommonModule,
    Module02RoutingModule
  ]
})
export class Module02Module { }
