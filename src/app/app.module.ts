import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgParticlesModule } from 'ng-particles';
import { AppComponent } from './app.component';
import { ConfettiComponent } from './Components/confetti/confetti.component';
import { SharedModule } from './shared/shared.module';
import { GoalComponent } from './Components/goal/goal.component';
import { MarcadorComponent } from './Components/marcador/marcador/marcador.component';
import { ProximosPartidosComponent } from './Components/proximos-partidos/proximos-partidos.component';
import { TablaPuntosComponent } from './Components/tabla-puntos/tabla-puntos.component';
import { MatchComponent } from './Components/marcador/match/match.component';
import { ConfigLoaderService } from './config-loader.service';
import { PreloadFactory } from './preload-service.factory';

@NgModule({
  declarations: [
    AppComponent,
    ConfettiComponent,
    GoalComponent,
    MatchComponent,
    MarcadorComponent,
    TablaPuntosComponent,
    ProximosPartidosComponent
  ],
  imports: [BrowserModule, HttpClientModule, NgParticlesModule, SharedModule],
  providers: [
    ConfigLoaderService,
    {
      provide: APP_INITIALIZER,
      deps: [ConfigLoaderService],
      multi: true,
      useFactory: PreloadFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
