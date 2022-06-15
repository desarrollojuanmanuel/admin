import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
})

export class Grafica1Component implements OnInit {

  public datos1 = [400,500,600]
  constructor() { }

  ngOnInit(): void {
  }

}
