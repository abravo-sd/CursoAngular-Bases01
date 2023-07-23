import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'DareDevil'];

  heroeEliminado:string = '';

  borrarHeroe(){
    this.heroeEliminado = this.heroes.pop() || '';
  }

}
