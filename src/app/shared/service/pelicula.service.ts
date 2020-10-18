import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  public API = '//swapi.dev/api';
  public PELICULA_API = this.API + '/films';

  constructor(private http: HttpClient){

  }

  getAll(page): Observable<any> {
    let params = new HttpParams();
    params = params.append('page',page);

    return this.http.get(this.PELICULA_API, { params: params });
  }

  get(urlPelicula: string) {
    
    return this.http.get(urlPelicula);
  }
}
