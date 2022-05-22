import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../shared/modales/usuario-modal';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor( private router:Router){}
    
usuario:Usuario[]=[];
public canActivate(route: ActivatedRouteSnapshot){
  let user =JSON.parse(localStorage.getItem('usuario') || '');
  console.log( typeof user);
  if(user.rol === 'ADMIN_ROLE'){
    return true;
  }
  alert("No tienes permisos")
  this.router.navigateByUrl('tienda/home');
  return false;
}  
  
}
