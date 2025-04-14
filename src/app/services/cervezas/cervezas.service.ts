import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cerveza } from '../../types/cervezas';

@Injectable({
  providedIn: 'root'
})
export class CervezasService {

  private url= "https://api.sampleapis.com/beers/ale";

  constructor(private http: HttpClient) { }

  //Obtener cervezas
  getCerveza(): Observable<Cerveza[]>{
    return this.http.get<Cerveza[]>(this.url);
  }

  //Obtener por ID
  getCervezaId(id:number): Observable<Cerveza>{
    return this.http.get<Cerveza>(`${this.url}/${id}`);
  }


}
