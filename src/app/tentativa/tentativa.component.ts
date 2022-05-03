import {
  Component,
  Input,
  OnInit,
  OnChanges,

} from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativa',
  templateUrl: './tentativa.component.html',
  styleUrls: ['./tentativa.component.css'],
})
export class TentativaComponent implements OnInit, OnChanges {
  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];

  @Input() public tentativas!: number;
  constructor() {
   }

  ngOnChanges(): void {
    console.log('tentativas recebidas do painel', this.tentativas);
    if(this.tentativas !==  this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas

      this.coracoes[indice - 1].cheio = false
    }
  }
  ngOnInit(): void {
   }
}
