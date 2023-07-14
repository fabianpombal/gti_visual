import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColegiosComponent } from './modules/components/colegios/colegios.component';
import { PreguntasComponent } from './modules/components/preguntas/preguntas.component';
import { CuestionariosComponent } from './modules/components/cuestionarios/cuestionarios.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
