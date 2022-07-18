import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICrudUserForm } from '../models/CRUD-form.model';

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {
  
  private _baseUrl:string = 'http://localhost:3000/usuarios'

  private subject = new Subject<void>();
  
  constructor(private http: HttpClient) {}
  
  sendClick() {
    this.subject.next()
  }
  
  getClickEventDelete() {
    return this.subject.asObservable();
  }
  
  
  getUsersList(): Observable<ICrudUserForm[]> {
    return this.http.get<ICrudUserForm[]>(`${this._baseUrl}`)
  }
  
  postUser(usuario: ICrudUserForm): Observable<ICrudUserForm> {
    //console.log(JSON.stringify(usuario));
    let header = new HttpHeaders().set('Content-Type', 'application/json')
    
    return this.http.post<ICrudUserForm>(`${this._baseUrl}`, usuario, {headers: header});
  }
  
  DelUser (id: number): Observable<any> {
    return this.http.delete<any>(`${this._baseUrl}/${id}`);
  }

  putUser(usuario: ICrudUserForm): Observable<ICrudUserForm> {
    console.log(JSON.stringify(usuario));
    let header = new HttpHeaders().set('Content-Type', 'application/json')  
    return this.http.put<ICrudUserForm>(`${this._baseUrl}${usuario.id}`, usuario, {headers: header});
  }

}

