import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {

  nombre: string = 'Javier';
  apellido: string = 'Rojas';
  edad: number = 25;
  // private edad: number = 25;

  // getEdad():number{
  //   return this.edad;
  // }
  

}
