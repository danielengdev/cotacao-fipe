import { Component, OnInit } from '@angular/core';
import { CotacaoService} from '../../services/cotacao.service';
import { Data, Cotacao as Cot } from '../../models/model';
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
  cotacao: Cot | null = null;

  selectedMarca = '';
  selectedModelo = '';
  selectedAno = '';
  selectedValor = '';

  constructor(public srv: CotacaoService) {}
  
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
    this.selectedModelo = '';
    this.selectedAno = '';
    this.modelos = [];
    this.anos = [];
    this.cotacao = null;
    this.srv.getModelos(this.selectedMarca).subscribe((data: any) => {
      this.modelos = data.modelos;
    });
  }

  getAnos(): void {
    this.selectedAno = '';
    this.anos = [];
    this.cotacao = null;
    this.srv.getAnos(this.selectedMarca, this.selectedModelo).subscribe((data: any) => {
      this.anos = data;
    });
  }

  getCotacao(): void {
    this.cotacao = null;
    this.srv.getCotacao(this.selectedMarca, this.selectedModelo, this.selectedAno).subscribe((data: any) => {
      this.cotacao = data;
    });
  }
}
