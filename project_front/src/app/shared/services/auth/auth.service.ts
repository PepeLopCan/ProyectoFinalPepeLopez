
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../../modales/usuario-modal';
import { Login } from '../../interfaces/login';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) {}

  login(formData: Login) {
    return this.http.post(`${base_url}/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
        //localStorage.setItem('user', JSON.stringify(resp.usuario));
        console.log(resp)
      })
    );
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
