export class usuario {
    constructor(
        public nombre: string,
        public email: string,
        public rol: string,
        public password?: string,
        public google?: boolean,
        public img?: string,
        public uid?: string,
    ) { }
}