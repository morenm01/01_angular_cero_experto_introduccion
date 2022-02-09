import { Component } from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  nuevo: Personaje = {
    nombre: "Trucks",
    poder: 15000
  }

  agregar(){
    console.log(`${this.nuevo.nombre} - ${this.nuevo.poder}`);


  }
  cambiarNombre(event:any){
    console.log(event.target.value);
  }
}
