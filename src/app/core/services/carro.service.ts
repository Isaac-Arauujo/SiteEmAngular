import { inject, Injectable } from '@angular/core';
import { ICarro } from './interface/ICarro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private readonly API = 'http://localhost:3000/carros'

  private http = inject(HttpClient) 

  listar(): Observable<ICarro[]> {
    return this.http.get<ICarro[]>(this.API)
  }

  incluir(carro: ICarro): Observable<ICarro> {
    return this.http.post<ICarro>(this.API, carro)
  }
  editar(carro: ICarro): Observable<ICarro> {
    const url = `${this.API}/${carro.id}`
    return this.http.put<ICarro>(url, carro)
  }
  buscarPorId(id: number): Observable<ICarro | undefined> {
    return this.http.get<ICarro>(this.API + `/${id}`);
  }

  excluir(id: number): Observable<ICarro> {
    return this.http.delete<ICarro>(this.API + `/${id}`);
  }
}
