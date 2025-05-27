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
  // ===== VARIÁVEIS =====
  telaRecuperacao = false; // Inicializada corretamente
  titulo = 'Faça seu Login!';
  login = '';
  senha = '';
  email = '';
  botaoDesabilitado = false; // ← MUDANÇA PRINCIPAL: false para habilitar o botão

  constructor(private router: Router) { }

  // ===== MÉTODO PRINCIPAL (corrigido) =====
  onBotaoClicado() {
    console.log('Botão clicado!'); // Para debug

    if (this.telaRecuperacao) {
      // Lógica para recuperação de senha
      this.enviarRecuperacao();
    } else {
      // Lógica para login
      this.fazerLogin();
    }
  }

  // ===== LOGIN (separado para melhor organização) =====
  fazerLogin() {
    console.log('Tentando fazer login...', this.login, this.senha);

    // Validação
    if (this.login.trim() === '' || this.senha.trim() === '') {
      alert('Preencha ambos os campos!');
      return;
    }

    // Desabilitar botão durante processamento
    this.botaoDesabilitado = true;

    // Simular delay de processamento (opcional)
    setTimeout(() => {
      if (this.login === 'administrador@infinity.com' && this.senha === 'admin') {
        alert(`Bem-vindo ${this.login}!`);
        this.router.navigate(['/carros']);
      } else if (this.login === 'cliente@infinity.com' && this.senha === 'cliente') {
        alert(`Bem-vindo ${this.login}!`);
        this.router.navigate(['']);
      } else {
        alert('Dados Inválidos');
      }
      
      // Reabilitar botão
      this.botaoDesabilitado = false;
    }, 500);
  }

  // ===== RECUPERAÇÃO DE SENHA =====
  enviarRecuperacao() {
    console.log('Enviando recuperação para:', this.email);

    if (this.email.trim() === '') {
      alert('Digite seu email!');
      return;
    }

    this.botaoDesabilitado = true;

    setTimeout(() => {
      alert('Link de recuperação enviado para seu email!');
      this.botaoDesabilitado = false;
      this.telaRecuperacao = false; // Volta para tela de login
      this.email = ''; // Limpa o campo
    }, 1000);
  }

  // ===== NAVEGAÇÃO =====
  voltarLogin() {
    this.telaRecuperacao = false;
    this.email = '';
  }

  esqueceuSenha() {
    this.telaRecuperacao = true;
  }

  criarConta() {
    console.log('Criar conta clicado');
    // Adicione sua lógica de criar conta aqui
  }

  // ===== GETTER PARA VALIDAÇÃO (opcional) =====
  get podeEnviar(): boolean {
    if (this.telaRecuperacao) {
      return this.email.trim().length > 0 && !this.botaoDesabilitado;
    }
    return this.login.trim().length > 0 && 
           this.senha.trim().length > 0 && 
           !this.botaoDesabilitado;
  }
}