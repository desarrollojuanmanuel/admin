import { HttpClient } from '@angular/common/http'
import { Injectable, NgZone } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { RegisterForm, LoginForm } from '../interfaces/register-form.interface'

declare const google: any
const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone) { }


  logout() {
    localStorage.removeItem('token')
    google.accounts.id.revoke('juangu455@gmail.com', () => {
      this.ngZone.run(() => {
        this.router.navigate(['/login'])
      })

    })
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || ''
    return this.http.get(`${base_url}/login/renew`, {
      headers: { 'x-token': token }
    }).pipe(tap(
      ({ token }: any) => {
        localStorage.setItem('token', token)
      }),
      map(resp => true),
      catchError(err => of(false))
    )
  }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData)
      .pipe(tap(
        ({ token }: any) => {
          localStorage.setItem('token', token)
        }))
  }

  login(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData)
      .pipe(tap(
        ({ token }: any) => {
          localStorage.setItem('token', token)
        }))
  }

  loginGoogle(token: string) {
    return this.http.post(`${base_url}/login/google`, { token })
      .pipe(tap(
        ({ token }: any) => {
          localStorage.setItem('token', token)
        }))
  }

}
