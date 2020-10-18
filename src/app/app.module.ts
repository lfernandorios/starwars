import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajeListComponent } from './personaje-list/personaje-list.component';
import { PersonajeEditComponent } from './personaje-edit/personaje-edit.component';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import { PeliculaEditComponent } from './pelicula-edit/pelicula-edit.component';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatPaginatorModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [

    AppComponent,
    PersonajeListComponent,
    PersonajeEditComponent,
    PeliculaListComponent,
    PeliculaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
