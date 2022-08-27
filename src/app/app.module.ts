import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgParticlesModule } from 'ng-particles';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcadorModule } from './Components/marcador/marcador.module';
import { ProximosPartidosModule } from './Components/proximos-partidos/proximos-partidos.module';
import { ConfettiComponent } from './Components/confetti/confetti.component';
import { TablaPuntosModule } from './Components/tabla-puntos/tabla-puntos.module';
import { AnimacionModule } from './Components/animacion/animacion.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, ConfettiComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarcadorModule,
    AnimacionModule,
    ProximosPartidosModule,
    TablaPuntosModule,
    NgParticlesModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
