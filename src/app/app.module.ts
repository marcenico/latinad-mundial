import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgParticlesModule } from 'ng-particles';
import { AppComponent } from './app.component';
import { ConfettiComponent } from './Components/confetti/confetti.component';
import { SharedModule } from './shared/shared.module';
import { AnimacionComponent } from './Components/animacion/animacion.component';
import { MarcadorComponent } from './Components/marcador/marcador/marcador.component';
import { ProximosPartidosComponent } from './Components/proximos-partidos/proximos-partidos.component';
import { TablaPuntosComponent } from './Components/tabla-puntos/tabla-puntos.component';
import { MatchComponent } from './Components/marcador/match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfettiComponent,
    AnimacionComponent,
    MatchComponent,
    MarcadorComponent,
    TablaPuntosComponent,
    ProximosPartidosComponent
  ],
  imports: [BrowserModule, HttpClientModule, NgParticlesModule, SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
