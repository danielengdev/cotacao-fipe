import { Component, OnInit } from '@angular/core';
import {CotacaoService} from '../../services/cotacao.service';
import { Data } from '../../models/model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cotacao',
  imports: [CommonModule, FormsModule],
  templateUrl: './cotacao.html',
  styleUrl: './cotacao.scss',
})
export class Cotacao implements OnInit {

  marcas: Data[] = [];
  modelos: Data[] = [];
  anos: Data[] = [];
  cotacao!: Cotacao;

  selectedMarca = '';
  selectedModelo = '';
  selectedAno = '';
  selectedValor = '';

  constructor(public srv: CotacaoService) {
  }
  
  ngOnInit(): void {
    this.getMarcas();
  }

  getMarcas(): void {
    this.srv.getMarcas().subscribe((data) => {
      this.marcas = data;
      console.log(this.marcas);
    });
  }

  getModelos(): void {
    this.srv.getModelos(this.selectedMarca).subscribe((data: any) => {
      this.modelos = data.modelos;
    });
  }

  getAnos(codigoMarca: number, modeloId: number): void {
    this.srv.getAnos(codigoMarca, modeloId).subscribe((data: any) => {
      this.anos = data;
    });
  }

  getCotacao(codigoMarca: number, modeloId: number, anoId: number): void {
    this.srv.getCotacao(codigoMarca, modeloId, anoId).subscribe((data: any) => {
      this.cotacao = data;
    });
  }
}
