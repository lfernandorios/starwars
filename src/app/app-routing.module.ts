import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajeListComponent } from './personaje-list/personaje-list.component';
import { PersonajeEditComponent } from './personaje-edit/personaje-edit.component';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import { PeliculaEditComponent } from './pelicula-edit/pelicula-edit.component';



const routes: Routes = [
  { path: '', redirectTo: '/personaje-list', pathMatch: 'full' },
  {
    path: 'personaje-list',
    component: PersonajeListComponent
  },
  {
    path: 'personaje-edit/:id',
    component: PersonajeEditComponent
  },
  {
    path: 'pelicula-list',
    component: PeliculaListComponent
  },
  {
    path: 'pelicula-edit/:id',
    component: PeliculaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
