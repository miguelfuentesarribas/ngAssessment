export interface ICrudUserForm {
    id?: number ;
    nombre: string ;
    password: string ;
    password2: string ;
    email: string ;
    pais?: object;
    check: boolean ;
    ciudad: string ;
}