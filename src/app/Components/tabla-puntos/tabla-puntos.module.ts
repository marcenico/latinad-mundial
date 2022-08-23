import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPuntosComponent } from './tabla-puntos/tabla-puntos.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TablaPuntosComponent],
  exports: [TablaPuntosComponent],
  imports: [CommonModule, SharedModule]
})
export class TablaPuntosModule {}
