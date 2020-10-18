import { Component, OnDestroy, OnInit, ɵsetCurrentInjector, ViewChild } from '@angular/core';
import { PeliculaService } from '../shared/service/pelicula.service';
import { Url } from 'url';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {
  peliculas: Array<any>;
  nextPage: Url;
  previousPage: Url;
  count: number;
  page = 1;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.getPeliculas(this.page);
  }

  getPeliculas(page: number){
    return this.peliculaService.getAll(page).subscribe(data => {    
      this.count = data['count'];
      this.nextPage = data['next'];
      this.previousPage = data['previous'];    
      this.peliculas = data['results'];         
    });
  }

  handlePageChange() {
    this.page = this.paginator.pageIndex+1;
    this.getPeliculas(this.page);
  }

}
