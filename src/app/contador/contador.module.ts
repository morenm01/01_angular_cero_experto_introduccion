import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ContadorComponent,
  ],
  exports: [
    ContadorComponent,
  ],
  imports: [
   // CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class ContadorModule{

}
