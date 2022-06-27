import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {

  constructor(private http: HttpClient) {}

  getUsersList(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios')
  }
}

