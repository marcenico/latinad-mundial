import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimacionComponent } from './animacion/animacion.component';

@NgModule({
  declarations: [AnimacionComponent],
  exports: [AnimacionComponent],
  imports: [CommonModule],
})
export class AnimacionModule {}
