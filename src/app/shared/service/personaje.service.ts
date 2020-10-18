import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  public API = '//swapi.dev/api';
  public PERSONAJE_API = this.API + '/people';

  constructor(private http: HttpClient){

  }

  getAll(page): Observable<any> {
    let params = new HttpParams();
    params = params.append('page',page);

    return this.http.get(this.PERSONAJE_API, { params: params });
  }

  get(urlPersonaje: string) {
    
    return this.http.get(urlPersonaje);
  }

}
