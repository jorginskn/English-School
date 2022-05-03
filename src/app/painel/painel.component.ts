import { Frase } from './../shared/frase.model';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit, OnDestroy{
  public frases: Frase[] = frases;
  public instrucao: string = 'Traduza essa frase:';
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase!: Frase;
  public progresso: number = 0;
  public tentativas: number = 3
 @Output() public encerrarJogo:EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()

  }
  ngOnDestroy(): void {
    console.log('componente painel foi destruido!');
  }

  ngOnInit(): void {}
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  checkAnswer(): void {
    if (this.rodadaFrase.frasePT == this.resposta) {
      //trocar pergunta da rodada
        this.rodada++;
        //progresso

        this.progresso = this.progresso + 100 / this.frases.length;
        this.atualizaRodada()
      //
      if(this.rodada === 4){
         this.encerrarJogo.emit('vitoria')}
    } else {
        /* Diminuir a variavel tentativas */
       this.tentativas--
      if(this.tentativas === -1){
         this.encerrarJogo.emit('derrota')
       }
    }

  }
  public atualizaRodada():void{
      this.rodadaFrase = this.frases[this.rodada];
      //limpar resposta do usuário
        this.resposta = '';
  }
}
