import { Component, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'
declare const google: any


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {


  @ViewChild('googleBtn') googleBtn: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: UsuarioService,
    private ngZone: NgZone) { }

  public formSubmitted = false
  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', Validators.required],
    password: ['', Validators.required],
    remember: [false]
  })

  ngAfterViewInit(): void {
    this.googleInit()
  }

  googleInit() {
    google.accounts.id.initialize({
      client_id: "274065345100-qs8jrvfnu3csi4s8fb10v7u04hn16oh4.apps.googleusercontent.com",
      callback: (res: any) => this.handleCredentialResponse(res)
    });
    google.accounts.id.renderButton(
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
  }

  handleCredentialResponse(response: any) {
    this.http.loginGoogle(response.credential).subscribe(res => {
      this.login()
    }, ({ error }) => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.msj,
    }))
  }

  login() {
    this.ngZone.run(() => {
      this.router.navigate(['/dashboard'])
    })

  }

  ingresar() {
    this.formSubmitted = true
    if (this.loginForm.invalid) {
      return
    }
    this.http.login(this.loginForm.value).subscribe(res => {
      this.login()
      if (this.loginForm.get('remember')?.value) {
        localStorage.setItem('email', this.loginForm.get('email')?.value)
      } else {
        localStorage.removeItem('email')
      }

    }, ({ error }) => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.msj,
    }))
  }

  campoNoValido(campo: string): boolean {
    return (this.loginForm.get(campo)?.invalid && this.formSubmitted) ? true : false
  }


}
