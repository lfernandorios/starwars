import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../shared/service/pelicula.service';
import { PersonajeService } from '../shared/service/personaje.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pelicula-edit',
  templateUrl: './pelicula-edit.component.html',
  styleUrls: ['./pelicula-edit.component.css']
})
export class PeliculaEditComponent implements OnInit {
  pelicula: any = {};
  personajes: Array<any> = [];  

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private peliculaService: PeliculaService,
              private personajeService: PersonajeService
              ) {
  }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      const urlPelicula = params['id'];
      
      if (urlPelicula) {
        this.peliculaService.get(urlPelicula).subscribe((pelicula: any) => {
          if (pelicula) {
            this.pelicula = pelicula;            
            this.getPersonajes();                      
                       
          } else {
            console.log(`Pelicula with url '${urlPelicula}' not found, returning to list`);
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
    this.router.navigate(['/pelicula-list']);
  }

  save(form: NgForm) {
    
    this.gotoList();
  }

  getPersonajes(){    
    
    for (let urlPersonaje of this.pelicula.characters) {
             
      this.personajeService.get(urlPersonaje).subscribe((personaje:any) => {
        if (personaje){
          
          this.personajes.push(personaje);          
        }else {
          console.log(`Personaje with url '${urlPersonaje}' not found, returning to list`);          
        }
      });
    }
    
  }

}
