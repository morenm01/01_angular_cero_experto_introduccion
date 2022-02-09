import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

 
  private _personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Krillin",
      poder: 900
    },
    {
      nombre: "Vegeta",
      poder: 700
    },
  ]

  get personajes():Personaje[]{
    return [...this._personajes];
  }

  constructor() {
    console.log('Servicio inicializado');
  }

  agregarPersonaje( personaje: Personaje ):void{
    console.log('agregando personaje' + personaje.nombre);
    this._personajes.push(personaje);

    console.log(this._personajes);
  }
}
