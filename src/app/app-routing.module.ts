import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  {path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'}, //aqui redireccionamos al primer componente cuando no se ingrese ninguna ruta
  {path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent},
  {path: 'gastos', component: GastosComponent},
  {path: '**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'} //aqui redireccionamos al primer componente cuando se ponga una ruta que no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
