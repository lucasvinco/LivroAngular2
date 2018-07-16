import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {

  habilitarBotao: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  validaSenha(valor: string): void {
    if(valor.length >= 5){
      this.habilitarBotao = true;
    } else {
      this.habilitarBotao = false;
    }
  }

  gravarSenha(senha): void {
    alert('senha gravada com sucesso, sua senha é: ' + senha);
  }
}
