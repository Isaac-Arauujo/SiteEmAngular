import { Component, input, Input, output } from '@angular/core';
import {MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ICarro } from '../../core/services/interface/ICarro';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
  carro = input.required<ICarro>()
  abrirModal = output<ICarro>()

  ngOnInit(){
  }

  comprar(){
    this.abrirModal.emit(this.carro())
  }
}
