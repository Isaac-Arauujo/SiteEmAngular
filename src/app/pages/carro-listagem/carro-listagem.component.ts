import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ICarro } from '../../core/services/interface/ICarro';
import { CarroService } from '../../core/services/carro.service';

@Component({
  selector: 'app-carro-listagem',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carro-listagem.component.html',
  styleUrl: './carro-listagem.component.css'
})
export class CarroListagemComponent implements OnInit {

  listaCarro!: ICarro[]

  private carroService = inject(CarroService)

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.carroService.listar().subscribe({
      next: (res) => {
        this.listaCarro = res
      },
      error: (error) => {
        console.error(error)
      }
    });

  }

  excluir(id: number) {
    if (id) {
      this.carroService.excluir(id).subscribe(() => {
        window.location.reload()
      })
    }
  }


}
