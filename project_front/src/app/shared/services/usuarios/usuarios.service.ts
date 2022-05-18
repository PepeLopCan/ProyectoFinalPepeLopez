import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../../modales/usuario-modal';

const base_url = environment.base_url; 
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient, private router:Router) { }

  getMiUsuario(id:string):Observable<any>{
    return this.http.get<Usuario>(`${base_url}/miUsuario/` + id);
  }

  deleteUser(id:string):Observable<any>{
    return this.http.delete<Usuario>(`${base_url}/usuarios/delete/`+ id)
  }

  updateUser(id:string, usuario:Usuario):Observable<any>{
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('usuario') || '')
    const body = {
      id:id,
      nombre:usuario.nombre, 
      email:usuario.email, 
      password:usuario.password,
    }
    return this.http.put(`${base_url}/usuarios/update/`+ user.id ,body,{ headers: {
      authorization:`Bearer ${token}`
    }});
  }

}




