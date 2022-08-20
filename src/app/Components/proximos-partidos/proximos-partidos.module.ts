import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximosPartidosComponent } from './proximos-partidos/proximos-partidos.component';

@NgModule({
  declarations: [ProximosPartidosComponent],
  exports: [ProximosPartidosComponent],
  imports: [CommonModule]
})
export class ProximosPartidosModule {}
