import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  @Input() numero1: number = 0;
  @Input() numero2: number = 0;
  @Output() resultado = new EventEmitter<number>();


  operar(operacion: string) {
    let resultado: number;
    
    switch (operacion) {
      case 'suma':
        resultado = this.numero1 + this.numero2;
        break;
      case 'resta':
        resultado = this.numero1 - this.numero2;
        break;
      case 'multiplicacion':
        resultado = this.numero1 * this.numero2;
        break;
      case 'division':
        resultado = this.numero1 / this.numero2;
        break;
      case 'potencia':
        resultado = Math.pow(this.numero1, this.numero2);
        break;
      case 'raiz':
        resultado = Math.pow(this.numero1, 1 / this.numero2);
        break;
      default:
        resultado = 0;
    }

    this.resultado.emit(resultado);
  }


  

}
