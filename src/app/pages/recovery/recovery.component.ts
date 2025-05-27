import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent {
  email = '';

  constructor(public router: Router) {}

  recuperar() {
    if (this.email.trim() !== '') {
      alert(`Instruções de recuperação enviadas para: ${this.email}`);
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, insira seu email!');
    }
  }

  voltarLogin() {
    this.router.navigate(['/login']);
  }
}
