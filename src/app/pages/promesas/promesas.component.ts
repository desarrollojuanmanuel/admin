import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const promesa = new Promise((resolve, reject) => {

      if (false) {
        resolve("hola neas")
      } else {
        reject("Error")
      }

    })

    promesa.then((mensaje) => {
      console.log(mensaje)
    }).catch(err => {
      console.log(err)
    })

    console.log("fin del init")
    this.getUsuarios().then(users => {
      console.log(users)
    })
  }

  getUsuarios() {
    return  new Promise(resolve => {
      fetch('https://reqres.in/api/users?page=2')
        .then(resp => resp.json())
        .then(body => resolve(body.data))
    })
  }

}
