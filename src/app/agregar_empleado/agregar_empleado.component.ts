import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'agregar_empleado',
  templateUrl: './agregar_empleado.component.html',
  styleUrls: ['./agregar_empleado.component.css']
})
export class AgregarEmpleadoComponent {

  data = ['Elige una opcion','Académico', 'Administrativo'];
  temp = [];
  temp1 = [];
  currentItem: String = '';
  isVisible: boolean = false;
  isVisible1:boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    onChange(value: any) {
      this.currentItem = value;
      if(this.currentItem !== 'Elige una opcion') {
        this.isVisible = true;
        this.isVisible1 = true;
        if(this.currentItem === 'Académico'){
          this.temp = ['Selecciona una opcion','Académico de Tiempo Completo','Academico de Medio Tiempo','Academico de Asignatura'];
          this.temp1 = ['Selecciona una opcion','Definitivo','Interino'];
        }
        else {
        this.temp = ['Selecciona una opcion','Sindicalizado','No sindicalizado'];
        this.isVisible1 =false;
      }
      } else this.isVisible = false;
    }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
