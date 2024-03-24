import { Module01RoutingModule } from './module01-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentM01Component } from './component-m01/component-m01.component';



@NgModule({
  declarations: [
    ComponentM01Component
  ],
  imports: [
    CommonModule,
    Module01RoutingModule
  ]
})
export class Module01Module { }
