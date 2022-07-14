import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {
  
  private _baseUrl:string = 'http://localhost:3030/usuarios'

  private subject = new Subject<void>();
  
  constructor(private http: HttpClient) {}
  
  sendClick() {
    this.subject.next()
  }
  
  getClickEventDelete() {
    return this.subject.asObservable();
  }
  
  
  getUsersList(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this._baseUrl}`)
  }
  
  postUser(usuario: Usuario): Observable<Usuario> {
    //console.log(JSON.stringify(usuario));
    let header = new HttpHeaders().set('Content-Type', 'application/json')
    
    return this.http.post<Usuario>(`${this._baseUrl}`, usuario, {headers: header});
  }
  
  DelUser (id: number): Observable<any> {
    return this.http.delete<any>(`${this._baseUrl}{id}`);
  }

  putUser(usuario: Usuario): Observable<Usuario> {
    console.log(JSON.stringify(usuario));
    let header = new HttpHeaders().set('Content-Type', 'application/json')  
    return this.http.put<Usuario>(`${this._baseUrl}${usuario.id}`, usuario, {headers: header});
  }

}

