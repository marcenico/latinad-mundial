import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcadorModule } from './Components/marcador/marcador.module';
import { ResultadosModule } from './Components/resultados/resultados.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarcadorModule,
    ResultadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
