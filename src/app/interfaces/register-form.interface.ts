export interface RegisterForm {
    nombre: string
    email: string
    password: string
    password2: string
    terminos: boolean
}

export interface LoginForm {
    password: string
    email: string,
    remember: boolean

}

