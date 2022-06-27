export interface Exercise {
    numero: number,
    title: string,
    disable: boolean,
    routerLink?: any,
}

export interface Country {
    name: string
}

export interface Usuario {
    nombre: string,
    password: string,
    email: string,
    check: boolean,
    pais?: string,
    ciudad: string,
}