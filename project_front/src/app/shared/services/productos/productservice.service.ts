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
    //const user = JSON.parse(localStorage.getItem('user') || '')
    return this.http.get<Product[]>(`${base_url}/productos/todos`);
  }
  
getProducto( id:string):Observable<any>{
    return this.http.get(`${base_url}/productos/miProducto/` + id);
  }

  
deleteProducto(id: string): Observable<any> {
    const user = JSON.parse(localStorage.getItem('usuario') || '')
    console.log(user);
    return this.http.delete(`${base_url}/productos/delete/`+ user.id,{body:{id:id}})
  }

createProduct(producto:Product):Observable<any>{
    const user = JSON.parse(localStorage.getItem('usuario') || '')
    console.log(user);
    const body = { 
        nombre:producto.nombre, 
        description:producto.description, 
        precio: producto.precio, 
        cantidad: producto.cantidad,
        inventario:producto.inventario,
        categoria:producto.categoria,
        rating:producto.rating}
    return this.http.post(`${base_url}/productos/create/`+ user.id , body);
      }
  }




