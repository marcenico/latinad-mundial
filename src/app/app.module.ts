import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgParticlesModule } from 'ng-particles';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcadorModule } from './Components/marcador/marcador.module';
import { ResultadosModule } from './Components/resultados/resultados.module';
import { ConfettiComponent } from './Components/confetti/confetti.component';

@NgModule({
  declarations: [AppComponent, ConfettiComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MarcadorModule, ResultadosModule, NgParticlesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
