import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CotacaoService {

  constructor(private http: HttpClient) { }

  URL_BASE = 'https://parallelum.com.br/fipe/api/v1/carros';

  getMarcas(): Observable<any> {
    return this.http.get(`${this.URL_BASE}/marcas`);
  }
  getModelos(marcaId: number | string): Observable<any> {
    return this.http.get(`${this.URL_BASE}/marcas/${marcaId}/modelos`);
  }
  getAnos(marcaId: number | string, modeloId:  number | string): Observable<any> {
    return this.http.get(`${this.URL_BASE}/marcas/${marcaId}/modelos/${modeloId}/anos`);
  }
  getCotacao(marcaId:  number | string, modeloId:  number | string, anoId:  number | string): Observable<any> {
    return this.http.get(`${this.URL_BASE}/marcas/${marcaId}/modelos/${modeloId}/anos/${anoId}`);
  }
  
}
