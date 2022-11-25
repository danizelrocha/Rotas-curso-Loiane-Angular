/* import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component'; */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { HomeComponent } from './home/home.component';


const APP_ROUTES:Routes = [
  { path: 'cursos/:id', component:CursosComponent},
  { path: 'cursos', component: CursosComponent},
  { path: 'login', component: LoginComponent},
  { path:  'naoEncontrado', component: CursoNaoEncontradoComponent},
  { path: '',component: HomeComponent}
];

export const routing: ModuleWithProviders<RouterModule>=RouterModule.forRoot(APP_ROUTES);
