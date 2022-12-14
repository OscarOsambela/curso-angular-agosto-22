import { Injectable } from '@angular/core';
import { Ejercicio } from 'src/helpers/ejercicio';
import { EJERCICIOS } from 'src/helpers/collection-ejercicioc';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  constructor() { }

  getEjercicios():Observable<Ejercicio[]>{
    return of(EJERCICIOS)
  }
}
