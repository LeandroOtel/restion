import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mesa } from '../interfaces/mesa'
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  BASE_URL: string = 'http://localhost:5000'; //servidor
  constructor(private http: HttpClient) { }

  getMesas(): Observable<Mesa[]>{
    return this.http.get<Mesa[]>(`${this.BASE_URL}/mesa`);
    //return this.http.get<Mesa[]>(`/mesa`);
  }

  getMesa(id : string): Observable<Mesa>{
    return this.http.get<Mesa>(`${this.BASE_URL}/mesa/${id}`);
  }

  createMesa(mesa: Mesa): Observable<Mesa> {
    return this.http.post<Mesa>(`${this.BASE_URL}/mesa/create`, mesa);
    //return this.http.post<Mesa>('/mesa/create', mesa);
  }

  deleteMesa(id: string): Observable<Mesa> {
    console.log(id);
    return this.http.delete<Mesa>(`${this.BASE_URL}/mesa/delete?mesaID=${id}`);
  }

  updateMesa(id: string, mesa: Mesa): Observable<Mesa> {
    return this.http.put<Mesa>(`${this.BASE_URL}/mesa/update?mesaID=${id}`, mesa);
  }
}
