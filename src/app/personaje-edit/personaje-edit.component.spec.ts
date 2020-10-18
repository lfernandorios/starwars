import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeEditComponent } from './personaje-edit.component';

describe('PersonajeEditComponent', () => {
  let component: PersonajeEditComponent;
  let fixture: ComponentFixture<PersonajeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
