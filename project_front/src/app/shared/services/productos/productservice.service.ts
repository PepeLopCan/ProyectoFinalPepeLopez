import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


const base_url = environment.base_url.toLowerCase();
@Injectable({
  providedIn: 'root'
})

export class ProductserviceService {
  producto:Product[]=[];
  constructor(private http: HttpClient) { }


getProductos(){
    const token = localStorage.getItem('token');
    return this.http.get<Product[]>(`${base_url}/productos/todos`, { headers: {
      authorization:`Bearer ${token}`
    }});
  }
  
getProducto( id:string):Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.get(`${base_url}/productos/miProducto/` + id, { headers: {
      authorization:`Bearer ${token}`
    }});
  }

  
deleteProducto(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('usuario') || '')
    console.log(user);
    return this.http.delete(`${base_url}/productos/delete/`+ user.id,{body:{id:id}, headers:{
      authorization:`Bearer ${token}`
    }})
  }

createProduct(producto:Product):Observable<any>{
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('usuario') || '')
    console.log(user);
    const body = { 
        nombre:producto.nombre, 
        description:producto.description, 
        precio: producto.precio, 
        cantidad: producto.cantidad,
        inventario:producto.inventario,
        categoria:producto.categoria,
        rating:producto.rating
      }
    console.log(body);
    return this.http.post(`${base_url}/productos/create/`+ user.id, body, { headers: {
      authorization:`Bearer ${token}`
    }});
      }
  }



