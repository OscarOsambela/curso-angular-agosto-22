import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EjercicioDetalleComponent } from './ejercicio-detalle/ejercicio-detalle.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { PanelComponent } from './panel/panel.component';
import { Clase1Component } from './componentes-prueba/clase1/clase1.component';

@NgModule({
  declarations: [AppComponent, EjerciciosComponent, EjercicioDetalleComponent, PanelComponent, Clase1Component],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
