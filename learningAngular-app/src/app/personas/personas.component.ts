import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje = '';
  titulo = '';
  mostrar=false;

  agregarPersona() {
    this.mostrar=true;
    this.mensaje = 'Persona Agregada';
  }

//   modificarTitulo(event: Event) {
//     console.log('entrando a metodo modificar titulo');
//     this.titulo = (<HTMLInputElement>event.target).value;
//   }
}