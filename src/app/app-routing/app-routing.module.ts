import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EjercicioDetalleComponent } from "../ejercicio-detalle/ejercicio-detalle.component";
import { EjerciciosComponent } from "../ejercicios/ejercicios.component";
import { PanelComponent } from "../panel/panel.component";

const routes: Routes = [
  {path: '', redirectTo: '/panel', pathMatch: 'full'},
  {path: 'ejercicios', component: EjerciciosComponent},
  {path: 'detalle/:id', component: EjercicioDetalleComponent},
  {path: 'panel', component: PanelComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
