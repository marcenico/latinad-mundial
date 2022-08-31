import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcadorComponent } from './marcador/marcador.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatchComponent } from './match/match.component';

@NgModule({
  exports: [],
  imports: [CommonModule, SharedModule]
})
export class MarcadorModule {}
