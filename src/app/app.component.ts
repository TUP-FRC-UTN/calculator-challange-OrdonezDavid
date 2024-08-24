import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import { ResultadoComponent } from "./resultado/resultado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CalculadoraComponent, ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';


  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  actualizarResultado(resultado: number) {
    this.resultado = resultado;
  }


}
