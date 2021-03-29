import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  public heroes: string[] = ['Superman','Acuaman','Mujer Maravilla ','Linterna Verde', 'flash'];
  public heroeBorrado:string = '';

  borarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);

  }

}
