import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcadorComponent } from './marcador/marcador.component';

@NgModule({
  declarations: [MarcadorComponent],
  exports: [MarcadorComponent],
  imports: [CommonModule]
})
export class MarcadorModule {}
