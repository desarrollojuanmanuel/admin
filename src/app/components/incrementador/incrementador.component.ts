import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  // @Input
  @Input('valor') progreso: number = 0
  @Input() btnClass: string = 'btn btn-primary'


  //@Input
  @Output() valorSalida: EventEmitter<number> = new EventEmitter()


  ngOnInit(): void {
    this.btnClass = `btn btn-${this.btnClass}`
  }

  cambiarValor(valor: number) {

    if (this.progreso >= 100 && this.progreso >= 0) {
      this.progreso = 100
      this.valorSalida.emit(this.progreso)
    }

    if (this.progreso <= 0 && this.progreso < 0) {
      this.progreso = 0
      this.valorSalida.emit(this.progreso)
    }
    this.progreso = this.progreso + valor
    this.valorSalida.emit(this.progreso)
  }

  OnChange(val: number) {
    if (val >= 100) {
      this.progreso = 100
    } else if (val <= 0) {
      this.progreso = 0
    } else {
      this.progreso = val
    }
    this.valorSalida.emit(this.progreso)
  }

}
