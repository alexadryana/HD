import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { routing, appRoutingProviders } from './app.routing'
import { HomeComponent } from './home/home.component';
import { AgregarEmpleadoComponent } from './agregar_empleado/agregar_empleado.component';
import { AgregarHorarioComponent } from './agregar_horario/agregar_horario.component';
import { VerEmpleadoComponent } from './ver_empleado/ver_empleado.component';
import { VerAsistenciaComponent } from './ver_asistencia/ver_asistencia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgregarEmpleadoComponent,
    AgregarHorarioComponent,
    VerEmpleadoComponent,
    VerAsistenciaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
