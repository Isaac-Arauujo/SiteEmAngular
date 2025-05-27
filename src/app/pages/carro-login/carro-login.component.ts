import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carro-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carro-login.component.html',
  styleUrl: './carro-login.component.css'
})
export class CarroLoginComponent {
  recuperar() {
    throw new Error('Method not implemented.');
  }
  titulo = 'Faça seu Login!';
  login = '';
  senha = '';
  email = '';
  botaoDesabilitado: boolean = true;

  constructor(private router: Router) { }

  onBotaoClicado() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {
      if (this.login === 'loginadmin' && this.senha === 'admin') {
        alert(`Bem-vindo ${this.login} !`);
        this.router.navigate(['/carros']);
      } else if (this.login === 'logincliente' && this.senha === 'cliente') {
        alert(`Bem Vindo${this.login}!`);
        this.router.navigate(['']);
      }

      else {
        alert(`Dados Inválidos`);
      }
    } else {
      alert(`Preencha ambos os campos!`);
    }
  }
  voltarLogin() {
    this.router.navigate(['/login']);
  }
}
