import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPuntosComponent } from './tabla-puntos/tabla-puntos.component';



@NgModule({
  declarations: [
    TablaPuntosComponent
  ],
  exports: [
    TablaPuntosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TablaPuntosModule { }
