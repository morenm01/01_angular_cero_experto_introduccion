import {Component} from '@angular/core'

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent{
  titulo: string = 'Contador';
  numero: number = 10;
  base  : number = 10;

  acumular(base: number): void {
    this.numero += base;
  }
}
