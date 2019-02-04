import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ver_asistencia',
  templateUrl: './ver_asistencia.component.html',
  styleUrls: ['./ver_asistencia.component.css']
})
export class VerAsistenciaComponent {
  career = ['Elige una opcion','ISI','LES','LCI','ITR','LSC'];
  teachers=['Todos','Jose Antonio','Dora Maria','Efren','Israel'];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
