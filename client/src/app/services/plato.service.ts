import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plato } from '../interfaces/plato';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  BASE_URL: string = 'http://localhost:5000'; //servidor
  constructor( private http : HttpClient) { }

  getPlatos(): Observable<Plato[]>{
    return this.http.get<Plato[]>(`${this.BASE_URL}/plato`);
    //return this.http.get<Plato[]>(`/plato`);
  }

  getPlato(id : string): Observable<Plato>{
    return this.http.get<Plato>(`${this.BASE_URL}/plato/${id}`);
  }

  createPlato(plato: Plato): Observable<Plato> {
    return this.http.post<Plato>(`${this.BASE_URL}/plato/create`, plato);
    //return this.http.post<Plato>('/plato/create', plato);
  }

  deletePlato(id: string): Observable<Plato> {
    console.log(id);
    return this.http.delete<Plato>(`${this.BASE_URL}/plato/delete?platoID=${id}`);
  }

  updatePlato(id: string, plato: Plato): Observable<Plato> {
    return this.http.put<Plato>(`${this.BASE_URL}/plato/update?platoID=${id}`, plato);
  }
  
}
