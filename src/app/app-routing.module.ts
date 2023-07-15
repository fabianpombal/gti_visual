import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColegiosComponent } from './modules/components/colegios/colegios.component';
import { PreguntasComponent } from './modules/components/preguntas/preguntas.component';
import { CuestionariosComponent } from './modules/components/cuestionarios/cuestionarios.component';
import { PreguntasTestComponent } from './modules/components/preguntas-test/preguntas-test.component';


const routes: Routes = [
  {
    component: ColegiosComponent,
    path: ''
  },
  {
    path: 'preguntas',
    component: PreguntasComponent
  },
  {
    path: 'cuestionarios',
    component: CuestionariosComponent
  },
  {
    path: 'preguntasTest',
    component: PreguntasTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
