import { Component, OnDestroy, OnInit, ɵsetCurrentInjector, ViewChild } from '@angular/core';
import { PersonajeService } from '../shared/service/personaje.service';
import { Url } from 'url';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-personaje-list',
  templateUrl: './personaje-list.component.html',
  styleUrls: ['./personaje-list.component.css']
})
export class PersonajeListComponent implements OnInit {
  personajes: Array<any>;
  nextPage: Url;
  previousPage: Url;
  count: number;
  page = 1;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {
    this.getPersonajes(this.page);      
  }

  getPersonajes(page: number){
    return this.personajeService.getAll(page).subscribe(data => {    
      this.count = data['count'];
      this.nextPage = data['next'];
      this.previousPage = data['previous'];    
      this.personajes = data['results'];         
    });
  }

  handlePageChange() {
    this.page = this.paginator.pageIndex+1;
    this.getPersonajes(this.page);
  }

}
