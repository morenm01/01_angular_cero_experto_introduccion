import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() {
    console.log("Ejecutando el constructor...");
   }



  ngOnInit(): void {
    console.log("Ejecutando el ngOnInit...");
  }

  heroes: string[]= ["Moreno Pérez", "Mercedes Clavijo", "Elena Moreno", "Ignacio Ávila"];
  heroeBorrado:string ='';

  borrarLastHeroe(){
    this.heroeBorrado = this.heroes.pop()|| '';
  }

  borrarFirstHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
