import { Component, OnInit } from '@angular/core';
import { CotacaoService} from '../../services/cotacao.service';
import { Data, Cotacao as Cot } from '../../models/model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculoService } from '../../services/calculo.service';

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
  num1!: number;
  num2!: number;

  constructor(
    public srv: CotacaoService, 
    public calculadoraPrincipal: CalculoService
  ) {}
  
  ngOnInit(): void {
    this.getMarcas();
  }

  getMarcas(): void {
    this.srv.getMarcas().subscribe((data) => {
      this.marcas = data;
      console.log(this.marcas);
    });
  }

  soma(a: number, b: number, c: number): number {
    return this.calculadoraPrincipal.soma(a, b, c);
  }

  opoeracaoMenos(a: number, b: number): number {
    return this.calculadoraPrincipal.subtrai(a, b);
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
