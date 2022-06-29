import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {
  
  private subject = new Subject<void>();
  
  constructor(private http: HttpClient) {}
  
  sendClick() {
    this.subject.next()
  }
  
  getClickEventDelete() {
    return this.subject.asObservable();
  }
  
  
  getUsersList(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios')
  }
  
  postUser(usuario: Usuario): Observable<Usuario> {
    //console.log(JSON.stringify(usuario));
    let header = new HttpHeaders().set('Content-Type', 'application/json')
    
    return this.http.post<Usuario>('http://localhost:3000/usuarios', usuario, {headers: header});
  }
  
  DelUser (id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/usuarios/${id}`);
  }

  putUser(usuario: Usuario): Observable<Usuario> {
    console.log(JSON.stringify(usuario));
    let header = new HttpHeaders().set('Content-Type', 'application/json')  
    return this.http.put<Usuario>(`http://localhost:3000/usuarios/${usuario.id}`, usuario, {headers: header});
  }

}

