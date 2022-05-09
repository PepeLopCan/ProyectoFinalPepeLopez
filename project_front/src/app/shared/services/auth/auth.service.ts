
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../../modales/usuario-modal';
import { Login } from '../../interfaces/login';
import { Register } from '../../interfaces/register';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) {}

  login(formData: Login) {
    return this.http.post(`${base_url}/auth/login`, formData);
  }
  
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/login');
  }

  crearUsuario(formData: Register) {
    return this.http.post(`${base_url}/usuarios/create`, formData)
  }
}
