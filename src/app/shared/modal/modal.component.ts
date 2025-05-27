import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { ICarro } from '../../core/services/interface/ICarro';
import { IPagamento } from '../../core/services/interface/IPagamento';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  // @Output() close = new EventEmitter<void>();
  compraFeita = false
  carro = input.required<ICarro>()
  close = output<boolean>()

    pagamento: IPagamento = {
    nome: '',
    numero: '',
    dataValidade: '',
    cvv: ''
  };

  ngOnInit(){
    console.log("Modal ",this.carro())
  }

  onClose() {
    this.close.emit(false);
  }
  onConfirmar() {
    this.compraFeita = true
  }
  voltarParaInicio(){
    window.location.reload()
  }
}
