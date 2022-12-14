import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/helpers/ejercicio';
import { EjercicioService } from '../ejercicio.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css'],
})
export class EjerciciosComponent implements OnInit {
  ejercicio: Ejercicio = {
    id: 1,
    name: 'Oscar',
    lastname: 'Osambela',
    currency: 10,
    title: 'Lista de ejercicios'

  };
  ejercicios!: Ejercicio[];
  ejercicioSeleccionado!: Ejercicio

  constructor(private ejercicioService:EjercicioService) {}

  //sincrono
  // getEjercicios_old():void{
  //   this.ejercicios = this.ejercicioService.getEjercicios()
  // }

  //asincrono(observable - rxjs)
  getEjercicios():void{
    this.ejercicioService.getEjercicios().subscribe(ejercicios=>this.ejercicios=ejercicios)
  }

  ngOnInit(): void {
    this.getEjercicios()
  }

  onSelectEjercicio(ejercicio:Ejercicio):void{
    this.ejercicioSeleccionado=ejercicio
    console.log(this.ejercicioSeleccionado);

  }
}


