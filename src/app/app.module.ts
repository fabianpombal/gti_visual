import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ColegiosComponent } from './modules/components/colegios/colegios.component';
import { PreguntasComponent } from './modules/components/preguntas/preguntas.component';
import { CuestionariosComponent } from './modules/components/cuestionarios/cuestionarios.component';
import { ApiCuestionarioService } from './modules/services/api.cuestionario.service';
import { ApiColegioService } from './modules/services/api.colegio.service';
import { ApiPreguntaService } from './modules/services/api.pregunta.service';

@NgModule({
  declarations: [
    AppComponent,
    ColegiosComponent,
    PreguntasComponent,
    CuestionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ButtonModule,
    TableModule
  ],
  providers: [
    ApiColegioService,
    ApiCuestionarioService,
    ApiPreguntaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
