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
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { PreguntasTestComponent } from './modules/components/preguntas-test/preguntas-test.component';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    ColegiosComponent,
    PreguntasComponent,
    CuestionariosComponent,
    PreguntasTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ButtonModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    BrowserAnimationsModule,
    AccordionModule,
    DialogModule,
    CardModule
  ],
  providers: [
    ApiColegioService,
    ApiCuestionarioService,
    ApiPreguntaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
