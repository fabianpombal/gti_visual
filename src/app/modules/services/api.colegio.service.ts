import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { colegioList } from '../models/colegio.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiColegioService {



  constructor(private http: HttpClient) { }
  private endpoint: string = "http://192.168.1.41:6001/colegios";


  get(): Observable<colegioList> {
    return this.http.get<colegioList>(`${this.endpoint}`);
  }

}
