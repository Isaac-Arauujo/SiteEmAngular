import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "./pages/home/home.component";
<<<<<<< HEAD
import { FooterComponent } from "./components/footer/footer.component";
=======
>>>>>>> 397c2a66f2c74059356ea835fca87f31ed4929a2

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, HeaderComponent, FormsModule, FooterComponent],
=======
  imports: [RouterOutlet, HeaderComponent, FormsModule, HomeComponent],
>>>>>>> 397c2a66f2c74059356ea835fca87f31ed4929a2
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Alunos';
  nome = '';
  sobrenome = '';
  textoBotao: string = 'Clique aqui!';
  botaoDesabilitado: boolean = false;
  mensagem: string = '';

  onBotaoClicado() {
    console.log(this.nome)
    alert(`Olá ${this.nome} ${this.sobrenome} !`) ;
  }

  onKeyUp(event: Event) {
    const input = event.target as HTMLInputElement;
    this.mensagem = `Olá ${input.value} !`;
  }
}
