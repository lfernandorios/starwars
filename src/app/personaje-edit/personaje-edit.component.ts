import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajeService } from '../shared/service/personaje.service';
import { PeliculaService } from '../shared/service/pelicula.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-personaje-edit',
  templateUrl: './personaje-edit.component.html',
  styleUrls: ['./personaje-edit.component.css']
})
export class PersonajeEditComponent implements OnInit {
  personaje: any = {};
  peliculas: Array<any> = [];

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private personajeService: PersonajeService,
              private peliculaService: PeliculaService
              ) {
  }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      const urlPersonaje = params['id'];
      
      if (urlPersonaje) {
        this.personajeService.get(urlPersonaje).subscribe((personaje: any) => {
          if (personaje) {
            this.personaje = personaje;
            this.getPeliculas();        
            
          } else {
            console.log(`Personaje with url '${urlPersonaje}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/personaje-list']);
  }

  save(form: NgForm) {
    
    this.gotoList();
  }

  getPeliculas(){    
    
    for (let urlPelicula of this.personaje.films) {
             
      this.personajeService.get(urlPelicula).subscribe((pelicula:any) => {
        if (pelicula){
          
          this.peliculas.push(pelicula);          
        }else {
          console.log(`Personaje with url '${urlPelicula}' not found, returning to list`);          
        }
      });
    }
    
  }


}
