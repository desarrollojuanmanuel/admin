import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  element = document.querySelector('#theme')
  constructor() { }

  ngOnInit(): void {
    this.element?.setAttribute('href', localStorage.getItem('theme') || './assets/css/colors/default-dark.css')
  }
}
