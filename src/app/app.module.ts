import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgParticlesModule } from 'ng-particles';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcadorModule } from './components/marcador/marcador.module';
import { ProximosPartidosModule } from './components/proximos-partidos/proximos-partidos.module';
import { ConfettiComponent } from './components/confetti/confetti.component';
import { TablaPuntosModule } from './components/tabla-puntos/tabla-puntos.module';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Autoplay } from 'swiper';

@NgModule({
  declarations: [AppComponent, ConfettiComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarcadorModule,
    ProximosPartidosModule,
    TablaPuntosModule,
    NgParticlesModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    SwiperCore.use([Autoplay]);
  }
}
