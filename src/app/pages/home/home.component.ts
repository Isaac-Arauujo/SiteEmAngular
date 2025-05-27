import { Component, inject } from '@angular/core';
import { CardItemComponent } from '../../shared/card-item/card-item.component';
import { ICarro } from '../../core/services/interface/ICarro';
import { CarroService } from '../../core/services/carro.service';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardItemComponent,
    ModalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titulo:string="";
  carros!: ICarro[]
  comprarCarro!: ICarro
  modal = false

  private carroService = inject(CarroService)

  ngOnInit(){
    this.carroService.listar().subscribe({
      next: (res) => {
        this.carros = res
        console.log('LISTA ', this.carros)
      },
      error: (error) => {
        console.error("Ocorreu um erro ", error)
      }
    })
  }

  comprar(carro: ICarro){
    this.comprarCarro = carro
    this.modal = true
  }

  fecharModal(){
    this.modal = false
  }
}
