import { Component } from '@angular/core';


@Component({
  selector: 'heroe-component',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent
{
  nombre: string= "Ironman";
  edad: number = 45;

  get capitalizada(){
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string{
      return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre():void {
    this.nombre = (this.nombre == 'Goku')? "Ironman": "Goku";
  }

  cambiarEdad(){
    this.edad +=1;
  }
}
