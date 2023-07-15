import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cuestionarioList } from '../models/cuestionario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCuestionarioService {

  constructor(private http: HttpClient) { }
  private readonly endpoint: string = "http://192.168.1.41:6001/tests";

  getBySchool(hash: string): Observable<cuestionarioList> {
    return this.http.get<cuestionarioList>(`${this.endpoint}/${hash}`)
  }
}
