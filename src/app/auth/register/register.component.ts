import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UsuarioService } from 'src/app/services/usuario.service'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false

  public registerForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    password2: ['', [Validators.required]],
    terminos: [false, Validators.required],
  }, {
    Validators: this.iqualPass('password', 'password2')
  })

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  iqualPass(pass1: string, pass2: string) {
    return (formGroup: FormGroup) => {
      const pass1c = formGroup.get(pass1)
      const pass2c = formGroup.get(pass2)

      if (pass1c === pass2c && this.formSubmitted) {
        pass2c?.setErrors(null)
      } else {
        pass2c?.setErrors({ noEsIgual: true })
      }
    }
  }

  crearUsuario() {
    this.formSubmitted = true
    if (this.registerForm.invalid) {
      return
    }
    // POSTEO DEL FORM
    this.usuarioService.crearUsuario(this.registerForm.value).subscribe(resp => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario Creado',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['/dashboard'])
    }, ({ error }) => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.msj,
    }));
  }

  campoNoValido(campo: string): boolean {
    return (this.registerForm.get(campo)?.invalid && this.formSubmitted) ? true : false
  }

  aceptaTerminos() {
    return !this.registerForm.get('terminos')?.value && this.formSubmitted
  }

  contrasenasNoValidas(): boolean {
    let pass1 = this.registerForm.get("password")?.value
    let pass2 = this.registerForm.get("password2")?.value
    return (pass1 === pass2 && this.formSubmitted) ? false : true
  }


}
