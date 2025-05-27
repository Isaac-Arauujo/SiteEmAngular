import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICarro } from '../../core/services/interface/ICarro';
import { CarroService } from '../../core/services/carro.service';

@Component({
  selector: 'app-carro-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carro-form.component.html',
  styleUrl: './carro-form.component.css'
})
export class CarroFormComponent {
  titulo = 'Cadastro de Carros';
  carroId?: number;

  carro: ICarro = {} as ICarro;

  private carroService = inject(CarroService)

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.carroId = Number(this.route.snapshot.params['id']);
    if (this.carroId) {
      this.carroService.buscarPorId(this.carroId).subscribe({
        next: (res) => {
          if (res) {
            this.carro.id = res.id;
            this.carro.nome = res.nome;
            this.carro.marca = res.marca;
            this.carro.modelo = res.modelo;
            this.carro.ano = res.ano;
            this.carro.valor = res.valor;
            this.carro.descricao = res.descricao;
            this.carro.img = res.img
          }
        },
        error: (error) => {
          console.error("Ocorreu um Erro", error)
        }
      })

    }
  }

  submeter() {
    if (this.carroId) {
      this.carroService.editar(this.carro).subscribe(() => {
        this.router.navigate(['/carros'])
      })
    } else {
      this.carroService.incluir(this.carro).subscribe(() => {
        this.router.navigate(['/carros'])
      })
    }
  }

}
