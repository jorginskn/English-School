import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  public jogoEmAndamento: boolean = true
  public tipoEncerramento:string | undefined

  public encerrarJogo(tipo:string ):void {
     this.jogoEmAndamento = false
     this.tipoEncerramento  = tipo
  }
  reiniciarJogo(): void{
    this.jogoEmAndamento = true
    this.tipoEncerramento = undefined
  }
}
