import { Component, OnInit } from '@angular/core';
import {CotacaoService} from '../../services/cotacao.service';
import { Data } from '../../models/model';

@Component({
  selector: 'app-cotacao',
  imports: [],
  templateUrl: './cotacao.html',
  styleUrl: './cotacao.scss',
})
export class Cotacao implements OnInit {

  marcas!: Data[];
  modelos!: Data[];
  anos!: Data[];
  cotacao!: Cotacao;

  constructor(public srv: CotacaoService) {
  }
  
  ngOnInit(): void {
    this.getMarcas();
  }

  getMarcas(): void {
    this.srv.getMarcas().subscribe((data: any) => {
      this.marcas = data;
      console.log(this.marcas);
    });
  }

  getModelos(marcaId: number): void {
    this.srv.getModelos(marcaId).subscribe((data: any) => {
      this.modelos = data.modelos;
    });
  }

  getAnos(marcaId: number, modeloId: number): void {
    this.srv.getAnos(marcaId, modeloId).subscribe((data: any) => {
      this.anos = data;
    });
  }

  getCotacao(marcaId: number, modeloId: number, anoId: number): void {
    this.srv.getCotacao(marcaId, modeloId, anoId).subscribe((data: any) => {
      this.cotacao = data;
    });
  }
}
