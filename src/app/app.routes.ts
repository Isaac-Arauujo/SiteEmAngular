import { Routes } from '@angular/router';
import { CarroListagemComponent } from './pages/carro-listagem/carro-listagem.component';
import { CarroFormComponent } from './pages/carro-form/carro-form.component';
import { CarroLoginComponent } from './pages/carro-login/carro-login.component';
import { HomeComponent } from './pages/home/home.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'home',
    },
    
    {
        path: 'carros',
        component: CarroListagemComponent,
        title: 'Carros',
    },
    {
        path: 'carros/incluir',
        component: CarroFormComponent,
        title: 'Carros - Incluir',
    },
    {
        path: 'carros/alterar/:id',
        component: CarroFormComponent,
        title: 'Carros - Alterar',
    },
    {
        path: 'carros/login',
        component: CarroLoginComponent,
        title: 'Login',
    },
    {
  path: 'recuperar-senha',
  component: RecoveryComponent,
  title: 'Recuperar senha'
}

];
