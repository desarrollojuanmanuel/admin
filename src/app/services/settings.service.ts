import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  element = document.querySelector('#theme')

  constructor() {
    this.element?.setAttribute('href', localStorage.getItem('theme') || './assets/css/colors/default-dark.css')
  }

  changeTheme(theme: string) {

    const url = `./assets/css/colors/${theme}.css`
    this.element?.setAttribute('href', url)
    localStorage.setItem('theme', url)
    this.checkCurrentTheme()
  }

  checkCurrentTheme() {
    let links = document.querySelectorAll('.selector')
    links.forEach((elem: any) => {
      elem.classList.remove('working')
      const btnTheme = elem.getAttribute('data-theme')
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.element?.getAttribute('href')

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working')
      }
    })
  }
}
