import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgParticlesModule } from 'ng-particles';
import { AppComponent } from './app.component';
import { ConfettiComponent } from './components/confetti/confetti.component';
import { SharedModule } from './shared/shared.module';
import { AnimacionComponent } from './components/animacion/animacion.component';
import { MarcadorComponent } from './components/marcador/marcador/marcador.component';
import { ProximosPartidosComponent } from './components/proximos-partidos/proximos-partidos.component';
import { TablaPuntosComponent } from './components/tabla-puntos/tabla-puntos.component';
import { MatchComponent } from './components/marcador/match/match.component';

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
