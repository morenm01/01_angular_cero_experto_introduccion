import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado/listado.component';



@NgModule({
  declarations: [
    ListadoComponent,
    HeroeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoComponent
  ],
  providers:[]
})
export class HeroeModule{

}
