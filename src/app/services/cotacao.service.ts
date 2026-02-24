import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CotacaoService {

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<any> {
    return this.http.get('https://parallelum.com.br/fipe/api/v1/carros/marcas');
  }
  getModelos(marcaId: number): Observable<any> {
    return this.http.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaId}/modelos`);
  }
  getAnos(marcaId: number, modeloId: number): Observable<any> {
    return this.http.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaId}/modelos/${modeloId}/anos`);
  }
  getCotacao(marcaId: number, modeloId: number, anoId: number): Observable<any> {
    return this.http.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaId}/modelos/${modeloId}/anos/${anoId}`);
  }
  
}
