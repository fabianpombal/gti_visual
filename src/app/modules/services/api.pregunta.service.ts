import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { preguntas, tipo_edades, tipo_estructuras, tipo_pregunta, tipo_preguntas } from '../models/pregunta.model';
@Injectable({
  providedIn: 'root'
})
export class ApiPreguntaService {


  constructor(private http: HttpClient) { }
  private endpoint: string = "http://192.168.1.41:6001";


  get(): Observable<preguntas> {
    return this.http.get<preguntas>(`${this.endpoint}/preguntas`);
  }

  getByColegio(cole: string): Observable<preguntas> {
    return this.http.get<preguntas>(`${this.endpoint}/preguntas/${cole}`)
  }

  getTipoPreguntas(): Observable<tipo_preguntas> {
    return this.http.get<tipo_preguntas>(`${this.endpoint}/tipo_preguntas`)
  }
  getTipoEdades(): Observable<tipo_edades> {
    return this.http.get<tipo_edades>(`${this.endpoint}/tipo_edades`)
  }
  getTipoEstructuras(): Observable<tipo_estructuras> {
    return this.http.get<tipo_estructuras>(`${this.endpoint}/tipo_estructuras`)
  }


}
