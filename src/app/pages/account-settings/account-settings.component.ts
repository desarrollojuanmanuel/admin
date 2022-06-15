import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public element = document.querySelector('#theme')
  public links:NodeListOf<Element>

  constructor() {
    this.links = document.querySelectorAll('.selector')
  }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector')
    this.checkCurrentTheme()
  }

  changeTheme(theme: string) {

    const url = `./assets/css/colors/${theme}.css`
    this.element?.setAttribute('href', url)
    localStorage.setItem('theme', url)
    this.checkCurrentTheme()
  }


  checkCurrentTheme() {

    this.links.forEach((elem:any) => {
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
