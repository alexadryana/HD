import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AgregarEmpleadoComponent } from './agregar_empleado/agregar_empleado.component';
import { AgregarHorarioComponent } from './agregar_horario/agregar_horario.component';
import { VerEmpleadoComponent } from './ver_empleado/ver_empleado.component';
import { VerAsistenciaComponent } from './ver_asistencia/ver_asistencia.component';

const appRoutes: Routes =[
	{path: '', component: HomeComponent},
	{path: 'agregar_empleado', component:AgregarEmpleadoComponent},
	{path: 'agregar_horario', component:AgregarHorarioComponent},
	{path: 'ver_empleado', component:VerEmpleadoComponent},
	{path: 'ver_asistencia', component:VerAsistenciaComponent},
	{path: '**', component:HomeComponent}

];
export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
