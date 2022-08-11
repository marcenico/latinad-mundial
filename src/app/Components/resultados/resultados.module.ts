import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    ResultadosComponent
  ],
  exports: [
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResultadosModule { }
