import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'agregar_horario',
  templateUrl: './agregar_horario.component.html',
  styleUrls: ['./agregar_horario.component.css']
})
export class AgregarHorarioComponent {
  data = ['E23D','5RR4','123A'];
  career = ['Elige una opcion','ISI','LES','LCI','ITR','LSC'];
  matter = ['Elige una opcion','POO','Reconocimiento'];
  currentItem: String = '';
  isVisible: boolean = false;
  isVisible1: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    onClickMe() {
      for (let x of this.data) {
            if(this.currentItem==x){
                this.isVisible = true;
                this.isVisible1 = false;
                break;
            }else{
                this.isVisible = false;
                this.isVisible1 = true;
            }
      }
    }
  constructor(private breakpointObserver: BreakpointObserver) {}

}
